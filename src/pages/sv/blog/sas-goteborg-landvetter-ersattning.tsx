import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, MapPin, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SasGoteborgPage() {
  return (
    <LayoutSv>
      <SEO
        title="Ersättning för SAS Göteborg–Köpenhamn–[destination] — rättigheter vid byte"
        description="Flyger du från Landvetter med byte i Köpenhamn? Missad anslutning är vanligt. Se dina rättigheter och hur du får ersättning."
        url="https://lotproblem.pl/sv/blog/sas-goteborg-landvetter-ersattning"
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
            Från Göteborg Landvetter ut i världen: Dina rättigheter vid byte
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            För många göteborgare börjar resan med en kort "skutt" till Kastrup (Köpenhamn). Men vad händer om det korta flyget är sent och du missar nästa plan?
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            Missade du anslutningen på Kastrup?
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Även om flyget från Landvetter bara var 20 minuter sent kan du ha rätt till 600 €.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv/forsenat-flyg?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=sas-goteborg" target="_blank" rel="nofollow noreferrer noopener">
              Kolla din ersättning
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Göteborg (GOT) – Köpenhamn (CPH) – Världen</h2>
          <p>
            Detta är en klassisk SAS-rutt. Flyget till Köpenhamn tar bara 45 minuter. Ofta är bytestiden på Kastrup snäv (40-50 minuter).
          </p>
          <p>
            Om flyget från Göteborg är <strong>25 minuter sent</strong>, räcker det ofta för att du ska missa nästa flyg till t.ex. London, New York eller Paris.
          </p>

          <h2>Regeln om slutdestinationen</h2>
          <p>
            Det spelar ingen roll att förseningen från Göteborg var liten. Om den gjorde att du missade nästa flyg, och du därför kom fram till din <strong>slutdestination</strong> mer än 3 timmar för sent, har du rätt till full ersättning.
          </p>

          <h3>Exempel:</h3>
          <ul>
            <li>Flyg 1: GOT-CPH (20 min sent).</li>
            <li>Flyg 2: CPH-New York (Missat p.g.a. de 20 min).</li>
            <li>Nytt flyg: Du kommer fram till New York 6 timmar senare än planerat.</li>
            <li><strong>Ersättning:</strong> 600 € (ca 6800 kr).</li>
          </ul>

          <h2>Vad måste du göra på Kastrup?</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Gå direkt till SAS transfer desk (eller service desk).</li>
            <li>Be om ombokning till nästa flyg.</li>
            <li>Be om matkuponger (vouchers) för väntetiden.</li>
          </ol>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <MapPin className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Strandad i Köpenhamn?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Göteborgare missar ofta flyg på Kastrup. Vi ser till att SAS betalar för besväret.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=sas-goteborg" target="_blank" rel="nofollow noreferrer noopener">
              Starta ärende
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
