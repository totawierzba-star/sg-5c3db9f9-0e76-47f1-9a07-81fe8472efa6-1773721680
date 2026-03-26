import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, PenTool, ClipboardCopy, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SasComplaintLetterPage() {
  return (
    <LayoutSv>
      <SEO
        title="Hur skriver du ett effektivt klagomålsbrev till SAS? — mall och råd"
        description="Vill du skriva till SAS själv? Använd vår beprövade mall för reklamation av flygförsening. Juridiskt korrekt språk som ger resultat."
        url="https://problemlot.com/sv/blog/klagomalsbrev-sas-mall"
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
            <span className="text-gray-500 text-sm">• 6 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Mall: Så skriver du en reklamation till SAS som fungerar
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Att skriva "Jag är arg, ge mig pengar" fungerar sällan. För att få SAS att lyssna måste du hänvisa till rätt lagparagrafer och vara saklig. Här är en mall du kan kopiera.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            Orkar du inte skriva brev?
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Vi skickar professionella juridiska kravbrev åt dig. Det tar 3 minuter att starta.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=sas-complaint-letter" target="_blank" rel="nofollow noreferrer noopener">
              Anlita ClaimWinger
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Vad måste brevet innehålla?</h2>
          <ol className="list-decimal pl-6 mb-6">
            <li>Dina personuppgifter och kontaktinfo.</li>
            <li>Flygnummer och datum.</li>
            <li>Bokningsnummer (PNR).</li>
            <li>Hänvisning till <strong>EU-förordning 261/2004</strong>.</li>
            <li>Det exakta beloppet du kräver (250, 400 eller 600 €).</li>
            <li>En tidsfrist för betalning (t.ex. 14 dagar).</li>
          </ol>

          <h2>Gratis mall (Kopiera och klistra in)</h2>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg font-mono text-sm border border-gray-300 dark:border-gray-700 overflow-x-auto relative">
            <p><strong>Till: SAS Scandinavian Airlines</strong></p>
            <p className="mt-2"><strong>Ämne: Krav på kompensation enligt EG 261/2004 - Bokning [DITT BOKNINGSNUMMER]</strong></p>
            <p className="mt-4">Hej,</p>
            <p className="mt-2">
              Jag skriver till er angående min flygning <strong>[FLYGNUMMER]</strong> från <strong>[AVGÅNGSPORT]</strong> till <strong>[DESTINATION]</strong> den <strong>[DATUM]</strong>.
            </p>
            <p className="mt-2">
              Flyget var försenat med mer än 3 timmar vid ankomst till slutdestinationen / inställt (stryk det som ej gäller).
            </p>
            <p className="mt-2">
              Enligt Europaparlamentets och rådets förordning (EG) nr 261/2004 har jag rätt till kompensation. Förseningen berodde inte på extraordinära omständigheter utanför er kontroll.
            </p>
            <p className="mt-2">
              Eftersom flygsträckan var [X] km, kräver jag en ersättning på <strong>[250/400/600] EUR</strong> per passagerare.
            </p>
            <p className="mt-2">
              Totalt belopp att utbetala: <strong>[TOTALSUMMA] EUR</strong>.
            </p>
            <p className="mt-2">
              Vänligen sätt in beloppet på mitt bankkonto:<br/>
              Bank: [DIN BANK]<br/>
              IBAN: [DITT IBAN]<br/>
              SWIFT/BIC: [DIN BIC]
            </p>
            <p className="mt-2">
              Om jag inte mottar betalning eller ett tillfredsställande svar inom 14 dagar, kommer jag att ta ärendet vidare till Allmänna reklamationsnämnden (ARN) eller anlita juridisk hjälp.
            </p>
            <p className="mt-4">
              Med vänlig hälsning,<br/>
              [DITT NAMN]<br/>
              [DIN ADRESS]
            </p>
          </div>

          <h2 className="mt-8">Viktiga tips</h2>
          <p>
            Skicka helst via SAS eget webbformulär ("Claim form"), men spara texten du skrev! Om formuläret inte fungerar, skicka som vanligt brev eller hitta en emailadress (svårt nuförtiden).
          </p>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Mail className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Får du inget svar?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            SAS ignorerar ofta privatpersoner. De ignorerar inte oss. Vi har direktkanaler till deras juridiska avdelning.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=sas-complaint-letter" target="_blank" rel="nofollow noreferrer noopener">
              Låt proffsen sköta det
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
