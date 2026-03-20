import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, ClipboardList, Send, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SasClaimProcessPage() {
  return (
    <LayoutSv>
      <SEO
        title="Hur ansöker du om ersättning från SAS steg för steg? — guide"
        description="Vill du kräva ersättning från SAS själv? Här är vår kompletta guide med steg-för-steg instruktioner för att lyckas med din reklamation."
        url="https://lotproblem.pl/sv/blog/hur-ansoka-ersattning-sas-steg-for-steg"
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
            <span className="text-gray-500 text-sm">• 8 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Så kräver du ersättning från SAS: Den ultimata guiden
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Att få rätt mot ett flygbolag kan kännas som en kamp mot Goliat. Men med rätt förberedelser och tålamod kan du lyckas. Här visar vi exakt hur du gör.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            Vill du slippa pappersarbetet?
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Vi kan sköta hela processen åt dig. Ingen vinst, ingen avgift.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=sas-claim-process" target="_blank" rel="nofollow noreferrer noopener">
              Låt experterna hantera det
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Steg 1: Samla bevis (på flygplatsen)</h2>
          <p>
            Det viktigaste steget sker redan när förseningen händer.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Ta bild på avgångstavlan som visar förseningen.</li>
            <li>Be personalen om en skriftlig bekräftelse på orsaken (om möjligt).</li>
            <li>Spara ditt boardingkort (digitalt eller papper).</li>
            <li>Spara kvitton för mat och dryck.</li>
          </ul>

          <h2>Steg 2: Skicka kravet till SAS</h2>
          <p>
            Du kan använda SAS eget webbformulär ("Claim form") på deras hemsida.
            <br />
            <strong>Tips:</strong> Var tydlig. Skriv "Jag kräver kompensation enligt EU 261/2004 på X euro för flyg SK1234 den [datum]."
            <br />
            Bifoga inte originalkvitton, bara kopior/foton.
          </p>

          <h2>Steg 3: Vänta (och vänta...)</h2>
          <p>
            SAS har ofta långa svarstider (4-8 veckor är inte ovanligt). Om de inte svarar inom 6-8 veckor, eller om de nekar dig med en standardfras ("extraordinära omständigheter"), gå vidare till steg 4.
          </p>

          <h2>Steg 4: Överklaga eller ta hjälp</h2>
          <p>
            Om du får avslag:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Alternativ A (Gör det själv):</strong> Anmäl ärendet till ARN (Allmänna reklamationsnämnden) i Sverige. Det är gratis men tar 6-12 månader.</li>
            <li><strong>Alternativ B (Snabbt & Säkert):</strong> Använd en tjänst som ClaimWinger. Vi tar risken och driver ärendet juridiskt. Vi tar bara betalt om vi lyckas.</li>
          </ol>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <FileText className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Tycker du det verkar krångligt?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Du behöver inte bli expert på EU-lag. Fyll i vårt formulär på 3 minuter så sköter vi resten.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=sas-claim-process" target="_blank" rel="nofollow noreferrer noopener">
              Starta ärende hos ClaimWinger
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
