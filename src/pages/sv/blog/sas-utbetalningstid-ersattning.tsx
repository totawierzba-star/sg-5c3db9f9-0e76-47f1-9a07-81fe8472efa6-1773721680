import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Clock, AlertCircle, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SasTimelinePage() {
  return (
    <LayoutSv>
      <SEO
        title="Hur lång tid tar ersättning från SAS? (Uppdaterad 2025)"
        description="Väntar du på pengar från SAS? Läs om aktuella väntetider för utbetalning av ersättning 2025 och vad du kan göra för att snabba på processen."
        url="https://problemlot.com/sv/blog/sas-utbetalningstid-ersattning"
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
            Hur lång tid tar det för SAS att betala ersättning?
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            "När kommer pengarna?" är den vanligaste frågan vi får från SAS-resenärer. Trots EU-regler som säger att utbetalning ska ske "skyndsamt", är verkligheten 2025 ofta en annan. Här går vi igenom vad du kan förvänta dig.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            Har du väntat mer än 6 veckor?
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Om SAS ignorerar dig eller drar ut på tiden, kan vi ta över ärendet och sätta juridisk press på dem.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv/forsenat-flyg?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=sas-timeline" target="_blank" rel="nofollow noreferrer noopener">
              Få hjälp med ditt krav
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Genomsnittlig väntetid hos SAS 2025</h2>
          <p>
            Baserat på data från tusentals ärenden kan vi se följande mönster för utbetalningar från SAS:
          </p>

          <div className="grid md:grid-cols-3 gap-4 my-8">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800 text-center">
              <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">Snabbaste fallen</h4>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">2-4 veckor</p>
              <p className="text-sm text-gray-500 mt-2">Enkla, obestridda fall där allt är solklart.</p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 text-center">
              <h4 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">Normalfallet</h4>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">6-12 veckor</p>
              <p className="text-sm text-gray-500 mt-2">När SAS kräver extra dokumentation eller har hög belastning.</p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800 text-center">
              <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">Komplicerade fall</h4>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">3-6 månader+</p>
              <p className="text-sm text-gray-500 mt-2">Vid tekniska fel, strejk-diskussioner eller om ärendet går till ARN.</p>
            </div>
          </div>

          <h2>Varför dröjer det?</h2>
          <p>
            Det finns flera anledningar till att SAS kan vara långsamma:
          </p>
          <ul className="list-disc pl-6">
            <li><strong>Hög arbetsbelastning:</strong> Under semestertider och efter storhelger ökar antalet krav dramatiskt.</li>
            <li><strong>Taktisk fördröjning:</strong> Tyvärr är det en känd strategi hos många flygbolag att dra ut på processen i hopp om att passageraren ska ge upp.</li>
            <li><strong>Manuell hantering:</strong> Många delar av processen hanteras fortfarande manuellt av handläggare.</li>
            <li><strong>"Extraordinära omständigheter":</strong> SAS kan lägga tid på att utreda (eller hävda) att vädret eller flygledningen orsakade förseningen.</li>
          </ul>

          <h2>Vad kan du göra för att snabba på processen?</h2>
          <ol>
            <li>
              <strong>Skicka in ett komplett krav direkt:</strong> Se till att alla bokningsnummer, biljetter och bankuppgifter (IBAN/BIC) finns med från början. Om SAS måste mejla dig för att fråga efter kontonummer lägger det till veckor på processen.
            </li>
            <li>
              <strong>Sätt en deadline:</strong> I ditt kravbrev, skriv tydligt: "Jag förväntar mig betalning inom 14 dagar." Det är inte juridiskt bindande på samma sätt som en dom, men det visar att du menar allvar.
            </li>
            <li>
              <strong>Påminn regelbundet:</strong> Om du inte hört något på 30 dagar, skicka en påminnelse. Dokumentera all kontakt.
            </li>
          </ol>

          <h2>När är det dags att ta hjälp?</h2>
          <p>
            Om du har väntat i mer än 8 veckor utan ett tydligt svar, eller om du bara får automatiska "vi har mottagit ditt ärende"-mejl, har processen stannat av.
          </p>
          <p>
            I detta läge är det ofta effektivt att låta ett specialiserat företag som ClaimWinger ta över. Flygbolag prioriterar ofta krav från juridiska ombud eftersom de vet att vi kan ta ärendet till domstol om det behövs.
          </p>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Clock className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Sluta vänta på SAS</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Vi känner till SAS alla undanflykter. Låt oss driva in dina pengar åt dig, så slipper du bevaka inkorgen.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=sas-timeline" target="_blank" rel="nofollow noreferrer noopener">
              Starta ditt ärende nu
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Vanliga frågor (FAQ)</h2>
          <div className="space-y-6 not-prose">
             <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Får jag ränta på pengarna om SAS dröjer?</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Ja, enligt svensk räntelag har du rätt till dröjsmålsränta om betalningen inte sker i tid (vanligtvis 30 dagar efter krav). Det är dock sällan SAS betalar detta frivilligt.</p>
             </div>
             <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Hur betalar SAS ut pengarna?</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Oftast via banköverföring direkt till ditt konto. De kan ibland be om dina bankuppgifter via en säker länk i ett mejl.</p>
             </div>
          </div>
        </div>
      </article>
    </LayoutSv>
  );
}
