import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, DollarSign, XCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RyanairSwedenPage() {
  return (
    <LayoutSv>
      <SEO
        title="Ryanair i Sverige — ersättning för försenat och inställt flyg"
        description="Flyger du med Ryanair från Arlanda eller Landvetter? Se dina rättigheter vid förseningar. Vi hjälper dig att få upp till 600 €."
        url="https://problemlot.com/sv/blog/ryanair-sverige-ersattning"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/sv/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-4 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Tillbaka till bloggen
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Lågprisflyg
            </span>
            <span className="text-gray-500 text-sm">6 mars 2025</span>
            <span className="text-gray-500 text-sm">• 6 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Ryanair i Sverige — dina rättigheter vid kaos
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Ryanair växer på Arlanda och Landvetter. Men när det billiga flyget blir försenat, försöker de ofta undvika att betala. Här är sanningen om dina rättigheter.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-yellow-900 dark:text-yellow-100 mb-2">
            Ryanair ignorerar dig?
          </h3>
          <p className="text-yellow-800 dark:text-yellow-200 mb-4">
            De är kända för att göra det svårt. Vi tar striden åt dig. Ingen vinst, ingen avgift.
          </p>
          <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=ryanair-sweden" target="_blank" rel="nofollow noreferrer noopener">
              Kräv ersättning från Ryanair
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Gäller EU-reglerna för Ryanair?</h2>
          <p>
            Ja, absolut. Ryanair är ett irländskt bolag (EU), och när du flyger från en svensk flygplats (eller landar i Sverige med dem) är du fullt skyddad av EU 261/2004.
          </p>
          <p>
            Det spelar ingen roll att biljetten kostade 100 kr. Ersättningen är fastställd i lag:
          </p>
          <ul>
            <li><strong>250 €</strong> för flyg upp till 1500 km (t.ex. Stockholm–Gdansk, Göteborg–London).</li>
            <li><strong>400 €</strong> för längre flyg inom Europa (t.ex. Stockholm–Malaga, Göteborg–Alicante).</li>
          </ul>

          <h2>Vanliga ursäkter från Ryanair</h2>
          <p>
            Ryanair är kreativa när det gäller att neka ersättning. Se upp för dessa:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <h3 className="font-bold text-red-600 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> "Operativa skäl"
              </h3>
              <p className="text-sm mt-2">
                Ofta kod för "vi hade inte tillräckligt med personal" eller "vi planerade schemat för tajt". Detta är INTE en giltig ursäkt. Du ska ha ersättning.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <h3 className="font-bold text-yellow-600 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" /> "Dåligt väder" (när andra flyger)
              </h3>
              <p className="text-sm mt-2">
                Om SAS och Norwegian lyfter från Arlanda samtidigt, kan inte Ryanair skylla på vädret. Vi kollar väderdata för att motbevisa dem.
              </p>
            </div>
          </div>

          <h2>Checklista för Ryanair-passagerare</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Spara boardingkortet:</strong> Ta en skärmdump i appen. Den försvinner efter flyget!</li>
            <li><strong>Kräv "Delay Confirmation":</strong> Fråga personalen vid gaten om orsaken.</li>
            <li><strong>Acceptera inte vouchers:</strong> Om de erbjuder en "resekupong" istället för pengar, tacka nej.</li>
          </ol>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <DollarSign className="w-12 h-12 mx-auto text-yellow-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Få dina 250 € - 400 €</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Ryanair hoppas att du ska ge upp. Gör inte det. Låt oss hantera byråkratin.
          </p>
          <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=ryanair-sweden" target="_blank" rel="nofollow noreferrer noopener">
              Starta ärende mot Ryanair
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
