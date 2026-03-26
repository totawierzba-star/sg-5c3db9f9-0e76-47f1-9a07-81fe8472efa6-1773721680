import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, DollarSign, XCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WizzAirSwedenPage() {
  return (
    <LayoutSv>
      <SEO
        title="Wizz Air i Sverige — ersättning för försenat och inställt flyg"
        description="Flyger du med Wizz Air från Skavsta eller Malmö? Se dina rättigheter vid förseningar. Vi hjälper dig att få upp till 600 €."
        url="https://problemlot.com/sv/blog/wizz-air-sverige-ersattning"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/sv/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-4 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Tillbaka till bloggen
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
              Lågprisflyg
            </span>
            <span className="text-gray-500 text-sm">6 mars 2025</span>
            <span className="text-gray-500 text-sm">• 6 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Wizz Air i Sverige: Dina rättigheter när det strular
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Wizz Air lockar med billiga biljetter från Skavsta och Malmö. Men när flyget ställs in, lämnas passagerarna ofta i sticket. Här är vad du har rätt till.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-pink-900 dark:text-pink-100 mb-2">
            Har Wizz Air nekat din ersättning?
          </h3>
          <p className="text-pink-800 dark:text-pink-200 mb-4">
            De nekar nästan alltid först. Ge inte upp. Vi driver ärendet åt dig mot en provision bara om vi lyckas.
          </p>
          <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=wizzair-sweden" target="_blank" rel="nofollow noreferrer noopener">
              Kräv ersättning från Wizz Air
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Gäller EU-reglerna för ett ungerskt bolag?</h2>
          <p>
            Ja! Wizz Air är ett EU-flygbolag. Oavsett om du flyger från Sverige till Polen, eller från Ungern till Sverige, är du skyddad av EU 261/2004.
          </p>
          <p>
            Ersättningen är:
          </p>
          <ul>
            <li><strong>250 €</strong> för korta flyg (t.ex. Skavsta–Gdansk).</li>
            <li><strong>400 €</strong> för längre flyg (t.ex. Malmö–Skopje).</li>
          </ul>

          <h2>Wizz Airs fulspel: "Krediter" istället för pengar</h2>
          <p>
            Vid inställt flyg erbjuder Wizz Air ofta 120% av biljettpriset i WIZZ-krediter. Det låter bra, men:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Krediterna kan ha kort giltighetstid.</li>
            <li>Du låser in pengarna hos dem.</li>
            <li><strong>Viktigast:</strong> Detta ersätter INTE kompensationen på 250-400 €!</li>
          </ul>
          <p>
            Du kan ta återbetalningen i krediter OM DU VILL, men du ska <strong>dessutom</strong> kräva den lagstadgade kompensationen i riktiga pengar.
          </p>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <DollarSign className="w-12 h-12 mx-auto text-pink-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Få dina pengar i handen</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Låt oss hantera Wizz Airs jurister.
          </p>
          <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=wizzair-sweden" target="_blank" rel="nofollow noreferrer noopener">
              Starta ärende nu
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
