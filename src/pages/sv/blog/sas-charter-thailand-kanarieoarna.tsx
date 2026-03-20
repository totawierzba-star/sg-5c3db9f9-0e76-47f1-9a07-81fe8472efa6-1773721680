import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Palmtree, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SasCharterPage() {
  return (
    <LayoutSv>
      <SEO
        title="Ersättning för SAS på charterliknande semesterleder (Thailand, Kanarieöarna) — regler"
        description="Flyger du charter med SAS? Samma EU-regler gäller! Se hur du får upp till 600 € vid försening till solen."
        url="https://lotproblem.pl/sv/blog/sas-charter-thailand-kanarieoarna"
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
            <span className="text-gray-500 text-sm">• 6 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Charter med SAS: Dina rättigheter när semestern blir försenad
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Många tror att charterflyg har sämre skydd än reguljärflyg. Fel! När SAS flyger dig till Gran Canaria eller Phuket (via Apollo eller Ving), gäller exakt samma EU-regler.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            Sen ankomst till solen?
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Långa semesterflyg ger ofta 400 € eller 600 € i ersättning.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv/forsenat-flyg?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=sas-charter" target="_blank" rel="nofollow noreferrer noopener">
              Kolla ersättning
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Charter vs. Reguljärflyg</h2>
          <p>
            Det spelar ingen roll om du köpte en "paketresa" av Ving eller Apollo. Om flygbolaget är SAS (SK-nummer), är de ansvariga för flygningen enligt EU 261/2004.
          </p>

          <h2>Vanliga semesterrutter och ersättning</h2>
          <ul>
            <li><strong>Stockholm/Köpenhamn – Gran Canaria/Teneriffa:</strong>
              <br />Avstånd: &gt;3500 km (beroende på rutt, ofta precis på gränsen).
              <br />Ersättning: Ofta <strong>400 €</strong> (inom EU) eller <strong>600 €</strong> (om utanför EU och &gt;3500km). Kanarieöarna räknas politiskt till EU, så taket är ofta 400 €.
            </li>
            <li><strong>Stockholm – Thailand (Phuket/Bangkok):</strong>
              <br />Avstånd: &gt;3500 km (Utanför EU).
              <br />Ersättning: <strong>600 €</strong>.
            </li>
            <li><strong>Stockholm – Medelhavet (Grekland, Spanien, Italien):</strong>
              <br />Avstånd: 1500-3500 km.
              <br />Ersättning: <strong>400 €</strong>.
            </li>
          </ul>

          <h2>Vem ska jag klaga till? SAS eller Apollo/Ving?</h2>
          <p>
            För <strong>flygersättningen</strong> (EU261) ska du vända dig direkt till <strong>SAS</strong>. Resebolaget (Ving/Apollo) ansvarar för prisavdrag på själva resan, men flygbolaget ansvarar för den standardiserade kompensationen för förseningen. Du kan faktiskt ha rätt till BÅDA!
          </p>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Palmtree className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Blev semestern förkortad?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Låt oss hjälpa dig att få plåster på såren. Vi hanterar kontakten med SAS.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=sas-charter" target="_blank" rel="nofollow noreferrer noopener">
              Få ersättning
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
