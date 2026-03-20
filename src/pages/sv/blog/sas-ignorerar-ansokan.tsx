import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, ShieldAlert, Gavel } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SasIgnoresClaimPage() {
  return (
    <LayoutSv>
      <SEO
        title="SAS ignorerar min ansökan — vad gör du efter 30, 60 och 90 dagar?"
        description="Har SAS inte svarat på din reklamation? Tystnad är en taktik. Lär dig hur du eskalerar ärendet när flygbolaget leker döda fisken."
        url="https://lotproblem.pl/sv/blog/sas-ignorerar-ansokan"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/sv/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-4 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Tillbaka till bloggen
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              SAS Guide
            </span>
            <span className="text-gray-500 text-sm">6 mars 2025</span>
            <span className="text-gray-500 text-sm">• 5 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            SAS svarar inte ("Ghosting") — din strategi dag för dag
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Du har skickat kravet. Veckorna går. Inget svar. Detta är tyvärr standardprocedur för många flygbolag. De hoppas att du ska glömma bort det. Så här tvingar du fram ett svar.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            Trött på att vänta?
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Vi väntar inte. Vi skickar inkassokrav och tar dem till domstol om det behövs.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=sas-ignores-claim" target="_blank" rel="nofollow noreferrer noopener">
              Överlåt ärendet till oss
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Tidslinje för ditt ärende</h2>

          <div className="border-l-4 border-gray-200 dark:border-gray-700 pl-6 space-y-8 my-8">
            <div className="relative">
              <span className="absolute -left-[35px] bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</span>
              <h3 className="text-lg font-bold">Dag 0-30: Den "normala" väntetiden</h3>
              <p>SAS automatiska svar säger ofta "Vi har hög arbetsbelastning". Ha tålamod, men sätt en påminnelse i din kalender.</p>
            </div>

            <div className="relative">
              <span className="absolute -left-[35px] bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</span>
              <h3 className="text-lg font-bold">Dag 45: Påminnelsen</h3>
              <p>Nu har det gått 6 veckor (enligt EU-rekommendationer är detta gränsen för rimlig tid). Skicka ett nytt mail/brev. Rubrik: "PÅMINNELSE - Slutligt krav innan rättsliga åtgärder".</p>
            </div>

            <div className="relative">
              <span className="absolute -left-[35px] bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</span>
              <h3 className="text-lg font-bold">Dag 60+: Eskalering</h3>
              <p>Om de fortfarande är tysta (eller skickar nonsens-svar) är det dags att sluta vara snäll. Nu har du två val:</p>
              <ul className="list-disc pl-6 mt-2">
                <li><strong>Anmäl till ARN (Allmänna reklamationsnämnden):</strong> Gratis, men tandlöst (tar 6-12 månader och SAS måste inte följa beslutet, även om de ofta gör det).</li>
                <li><strong>Anlita ett Claim-bolag (som oss):</strong> Vi stämmer dem i domstol. Det brukar få fart på utbetalningen direkt.</li>
              </ul>
            </div>
          </div>

          <h2>Varför svarar de inte?</h2>
          <p>
            Det är en kalkyl. Om 100 personer har rätt till ersättning, men SAS ignorerar dem, kanske 70 ger upp. Det sparar miljoner åt flygbolaget. Var en av de 30 som inte ger upp!
          </p>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Gavel className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Dags att ta i med hårdhandskarna?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Låt inte SAS ignorera dina rättigheter. Vi driver ärendet hela vägen till domstol om så krävs.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=sas-ignores-claim" target="_blank" rel="nofollow noreferrer noopener">
              Tvinga SAS att betala
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
