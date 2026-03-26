import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Ban, Wallet, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NorwegianCashPointsPage() {
  return (
    <LayoutSv>
      <SEO
        title="Norwegian CashPoints eller pengar? Acceptera aldrig poäng för försening!"
        description="Erbjuder Norwegian CashPoints som ersättning? Varning! Det är ofta en dålig affär. Läs varför du alltid ska kräva kontanter enligt lag."
        url="https://problemlot.com/sv/blog/norwegian-cashpoints-vs-pengar"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/sv/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-4 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Tillbaka till bloggen
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
              Norwegian Varning
            </span>
            <span className="text-gray-500 text-sm">6 mars 2025</span>
            <span className="text-gray-500 text-sm">• 5 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Varför du ska säga NEJ till Norwegian CashPoints vid försening
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Det är Norwegians favorittrick. Du klagar på en försening, och de svarar: "Här har du 500 CashPoints för besväret." Låter trevligt? Det är en fälla.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-red-900 dark:text-red-100 mb-2">
            Har du redan fått poäng?
          </h3>
          <p className="text-red-800 dark:text-red-200 mb-4">
            Om du inte skrivit på ett avtal om att avstå vidare krav, kan vi kanske fortfarande hjälpa dig.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=norwegian-cashpoints" target="_blank" rel="nofollow noreferrer noopener">
              Kontrollera ditt ärende gratis
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Matematiken är enkel (och skrämmande)</h2>
          <p>
            Låt oss räkna på ett exempel. Du flög Stockholm–Alicante (över 1500 km) och blev 4 timmar försenad.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border border-red-200 bg-red-50 p-6 rounded-lg dark:bg-red-900/10 dark:border-red-800">
              <h3 className="text-xl font-bold text-red-700 dark:text-red-400 flex items-center gap-2">
                <Ban className="w-5 h-5" /> Norwegians erbjudande
              </h3>
              <p className="mt-2 text-3xl font-bold">500 CashPoints</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Värde: ca 500 NOK (ca 45 €)</p>
              <ul className="text-sm mt-4 space-y-1 list-disc pl-4">
                <li>Bara giltiga hos Norwegian</li>
                <li>Går ut efter en viss tid</li>
                <li>Kan inte betala hyran med dem</li>
              </ul>
            </div>

            <div className="border border-green-200 bg-green-50 p-6 rounded-lg dark:bg-green-900/10 dark:border-green-800">
              <h3 className="text-xl font-bold text-green-700 dark:text-green-400 flex items-center gap-2">
                <Wallet className="w-5 h-5" /> Din lagliga rätt
              </h3>
              <p className="mt-2 text-3xl font-bold">400 EUR</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Värde: ca 4 500 SEK</p>
              <ul className="text-sm mt-4 space-y-1 list-disc pl-4">
                <li>Riktiga pengar på kontot</li>
                <li>Använd till vad du vill</li>
                <li>Lagstadgat krav</li>
              </ul>
            </div>
          </div>

          <h2>Varför gör Norwegian så här?</h2>
          <p>
            För att det sparar dem miljoner. De flesta passagerare vet inte bättre och blir glada för "gåvan". Men kom ihåg: EU-förordning 261/2004 säger tydligt att ersättning ska betalas i pengar, om inte passageraren skriftligen godkänner annat.
          </p>

          <h2>När är CashPoints OK?</h2>
          <p>
            Bara om värdet på poängen är <strong>högre</strong> än den lagstadgade ersättningen OCH du planerar att flyga med Norwegian snart igen. Men det händer nästan aldrig.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 dark:bg-yellow-900/20 dark:border-yellow-600">
            <h4 className="text-lg font-bold text-yellow-800 dark:text-yellow-200">Varning</h4>
            <p className="text-yellow-700 dark:text-yellow-300">
              Om du klickar "Acceptera" på ett mail från Norwegian om poäng, kan du ha avsagt dig rätten till pengar. Gör inte det innan du pratat med oss!
            </p>
          </div>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <CheckCircle className="w-12 h-12 mx-auto text-green-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Vi kräver pengar, inte poäng</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Vi vet exakt vad lagen säger. Låt oss ta striden med Norwegian åt dig. Ingen vinst, ingen avgift.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=norwegian-cashpoints" target="_blank" rel="nofollow noreferrer noopener">
              Få din ersättning i pengar
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
