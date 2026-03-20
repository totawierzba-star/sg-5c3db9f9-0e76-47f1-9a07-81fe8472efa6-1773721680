import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SasDocumentsPage() {
  return (
    <LayoutSv>
      <SEO
        title="Vilka dokument behöver du för att kräva ersättning från SAS? — checklista"
        description="Saknar du bevis? Se vår lista över dokument du måste spara för att få ersättning från SAS. Boardingkort, kvitton och intyg."
        url="https://lotproblem.pl/sv/blog/vilka-dokument-kravs-sas"
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
            <span className="text-gray-500 text-sm">• 4 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Inga dokument, ingen ersättning: Vad du måste spara
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            SAS jurister älskar när passagerare slarvar bort sina boardingkort. Låt dem inte vinna på teknikaliteter. Här är den kompletta listan över vad du behöver.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            Har du slängt boardingkortet?
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Lugn, vi kan ofta hitta dina flygdata ändå. Låt oss kolla ditt ärende.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=sas-documents" target="_blank" rel="nofollow noreferrer noopener">
              Starta ärende utan krångel
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Måste-ha dokument</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <strong>Bokningsbekräftelse (E-ticket)</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400">Mailet du fick när du köpte resan. Måste innehålla ditt bokningsnummer (PNR, 6 tecken, t.ex. "X7Y2Z9").</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <strong>Boardingkort (Viktigast!)</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400">Beviset på att du faktiskt var på flygplatsen. Har du det i appen? Ta en skärmdump NU, innan det försvinner!</p>
              </div>
            </li>
          </ul>

          <h2>Bra-att-ha dokument</h2>
          <ul className="space-y-4 mt-4">
            <li className="flex items-start gap-3">
              <FileText className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <strong>Förseningsintyg (Delay Statement)</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400">Be personalen i gaten eller vid service desk om ett papper som bekräftar orsaken till förseningen.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FileText className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <strong>Foton på avgångstavlan</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400">En bild säger mer än tusen ord. Fota skärmen som visar "Delayed" eller "Cancelled".</p>
              </div>
            </li>
          </ul>

          <h2>För extra utgifter (Hotell/Mat)</h2>
          <p>
            Om du vill ha ersättning för utlägg måste du ha <strong>originalkvitton</strong>. Kontoutdrag räcker oftast inte eftersom de inte visar <em>vad</em> du köpte (SAS betalar inte för alkohol).
          </p>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <AlertTriangle className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Saknar du något papper?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Vi har tillgång till flygdatabaser och kan ofta rekonstruera bevisningen.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=sas-documents" target="_blank" rel="nofollow noreferrer noopener">
              Få hjälp med bevisen
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
