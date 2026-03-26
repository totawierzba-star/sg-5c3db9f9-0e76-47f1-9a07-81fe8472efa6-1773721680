import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Palmtree, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PackageTravelPage() {
  return (
    <LayoutSv>
      <SEO
        title="Paketreselagen + Flygersättning = Dubbel kompensation?"
        description="Blev charterresan förstörd? Du kan ha rätt till både prisavdrag enligt Paketreselagen OCH flygersättning enligt EU261. Läs hur."
        url="https://problemlot.com/sv/blog/paketreselagen-flygersattning"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/sv/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-4 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Tillbaka till bloggen
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-orange-900 dark:text-orange-300">
              Charter & Lagar
            </span>
            <span className="text-gray-500 text-sm">6 mars 2025</span>
            <span className="text-gray-500 text-sm">• 5 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Paketresa? Så maximerar du ersättningen (dubbla lagar!)
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Många tror att man måste välja mellan ersättning från resebolaget (Ving, TUI) och flygbolaget. Men ofta kan du kräva båda.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-orange-900 dark:text-orange-100 mb-2">
            Vi kollar EU261-delen åt dig
          </h3>
          <p className="text-orange-800 dark:text-orange-200 mb-4">
            Låt oss hantera flygkompensationen (upp till 600 €). Prisavdraget på resan kan du ta direkt med resebolaget.
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=package-travel" target="_blank" rel="nofollow noreferrer noopener">
              Kolla din flygersättning
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Två olika lagar, två olika syften</h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 dark:bg-blue-900/20">
              <h3 className="font-bold text-blue-800 dark:text-blue-100 mb-2">1. EU 261/2004 (Flyg)</h3>
              <p className="text-sm">
                Ger dig <strong>schablonersättning</strong> (250-600 €) för själva tidsförlusten och strulet. Betalas av flygbolaget.
              </p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 dark:bg-orange-900/20">
              <h3 className="font-bold text-orange-800 dark:text-orange-100 mb-2">2. Paketreselagen</h3>
              <p className="text-sm">
                Ger dig <strong>prisavdrag</strong> på resans pris för att semestern blev sämre än utlovat (t.ex. missad dag på hotellet). Betalas av researrangören.
              </p>
            </div>
          </div>

          <h2>Kan man få båda?</h2>
          <p>
            Ja och nej. Huvudregeln är att ersättningarna kan kvittas mot varandra ("avräknas").
            <br />
            <strong>Men:</strong> Om din olägenhet är större än vad den ena lagen täcker, kan du få mellanskillnaden.
          </p>
          <p>
            <strong>Tips:</strong> Börja alltid med att söka EU261-ersättningen (flygkompensationen). Den är oftast högre än ett dagsavdrag på hotellpriset. Om resebolaget sedan erbjuder ett litet prisavdrag, se till att det inte hindrar dig från att kräva flygersättningen.
          </p>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <PlusCircle className="w-12 h-12 mx-auto text-orange-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Vi hjälper dig räkna</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Det är krångligt med dubbla lagar. Vi är experter på flygdelen.
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=package-travel" target="_blank" rel="nofollow noreferrer noopener">
              Starta ärende nu
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
