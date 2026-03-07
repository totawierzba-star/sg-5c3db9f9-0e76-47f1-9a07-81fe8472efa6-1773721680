import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Palmtree, Sun, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CharterCompensationPage() {
  return (
    <LayoutSv>
      <SEO
        title="TUI, Ving, Apollo — ersättning för försenat charterflyg"
        description="Blev charterresan försenad? EU-regler gäller även för TUI, Sunclass (Ving) och Novair (Apollo). Få upp till 600 € per person."
        url="https://lotproblem.pl/sv/blog/tui-ving-apollo-charter-ersattning"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/sv/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-4 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Tillbaka till bloggen
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-orange-900 dark:text-orange-300">
              Charter & Semester
            </span>
            <span className="text-gray-500 text-sm">6 mars 2025</span>
            <span className="text-gray-500 text-sm">• 7 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Charterflyg försenat? Dina rättigheter hos TUI, Ving och Apollo
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Många tror att charterresor har sämre skydd. Fel! Samma EU-lagar gäller. En familj på fyra kan ha rätt till över 25 000 kr i ersättning.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-orange-900 dark:text-orange-100 mb-2">
            Förlorade ni en semesterdag?
          </h3>
          <p className="text-orange-800 dark:text-orange-200 mb-4">
            Förutom kompensation för flyget kan ni ha rätt till prisavdrag på själva resan (paketreselagen). Vi kollar flygersättningen åt er.
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=charter-sweden" target="_blank" rel="nofollow noreferrer noopener">
              Kolla ersättning för hela familjen
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Vilka flygbolag gäller det?</h2>
          <p>
            De stora charterarrangörerna i Sverige använder ofta sina egna flygbolag. Alla dessa täcks av reglerna:
          </p>
          <ul className="grid md:grid-cols-2 gap-4 my-6">
            <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg dark:bg-gray-800">
              <Sun className="text-yellow-500 w-6 h-6" />
              <div>
                <strong>TUI fly Nordic</strong>
                <span className="block text-sm text-gray-500">Resor med TUI</span>
              </div>
            </li>
            <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg dark:bg-gray-800">
              <Sun className="text-yellow-500 w-6 h-6" />
              <div>
                <strong>Sunclass Airlines</strong>
                <span className="block text-sm text-gray-500">Resor med Ving</span>
              </div>
            </li>
            <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg dark:bg-gray-800">
              <Sun className="text-yellow-500 w-6 h-6" />
              <div>
                <strong>Novair / SAS Charter</strong>
                <span className="block text-sm text-gray-500">Resor med Apollo</span>
              </div>
            </li>
            <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg dark:bg-gray-800">
              <Sun className="text-yellow-500 w-6 h-6" />
              <div>
                <strong>Braathens (BRA)</strong>
                <span className="block text-sm text-gray-500">Charter & Inrikes</span>
              </div>
            </li>
          </ul>

          <h2>Hur mycket pengar handlar det om?</h2>
          <p>
            De flesta charterresor går till Medelhavet eller Kanarieöarna. Det betyder långa avstånd:
          </p>
          <ul>
            <li><strong>Kanarieöarna (Gran Canaria, Tenerife):</strong> Över 3500 km = <strong>400 € eller 600 €</strong> (beroende på om det räknas som inom EU eller inte, Kanarieöarna är speciellt, men ofta 400€).</li>
            <li><strong>Thailand / Mexiko / Karibien:</strong> Alltid över 3500 km = <strong>600 €</strong> per person.</li>
            <li><strong>Grekland / Turkiet / Spanien:</strong> Ofta 1500-3500 km = <strong>400 €</strong> per person.</li>
          </ul>

          <h3>Exempel: Familjen Svensson till Phuket</h3>
          <p>
            Familjen (2 vuxna, 2 barn) skulle flyga med TUI till Thailand. Flyget blev 5 timmar försenat p.g.a. ett däckbyte.
            <br />
            <strong>Ersättning:</strong> 4 personer × 600 € = <strong>2 400 € (ca 27 000 kr)</strong>.
            <br />
            Detta betalas ut i kontanter, inte i presentkort!
          </p>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Palmtree className="w-12 h-12 mx-auto text-orange-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Få pengar tillbaka från semestern</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Låt inte flygbolaget behålla era pengar. Vi hjälper er att kräva ut varenda krona.
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=charter-sweden" target="_blank" rel="nofollow noreferrer noopener">
              Beräkna familjens ersättning
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}