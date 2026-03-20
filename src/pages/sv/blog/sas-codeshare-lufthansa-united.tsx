import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Globe, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SasCodesharePage() {
  return (
    <LayoutSv>
      <SEO
        title="SAS codeshare med Lufthansa eller United — vem betalar ersättningen?"
        description="Köpte du biljett av SAS men flög med Lufthansa eller United? Se vem du ska kräva ersättning av vid försening (Operating Carrier)."
        url="https://lotproblem.pl/sv/blog/sas-codeshare-lufthansa-united"
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
            SAS codeshare: Vem betalar när du flyger med partnerflygbolag?
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Du har en biljett som börjar med "SK" (SAS), men planet är målat i Lufthansas eller Uniteds färger. Vem ansvarar när det blir förseningar? Svaret är avgörande för din ersättning.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            Var det inte SAS plan?
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Vi vet exakt vilket bolag som ska betala. Skicka in ditt ärende så löser vi byråkratin.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=sas-codeshare" target="_blank" rel="nofollow noreferrer noopener">
              Starta ärende gratis
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Regeln om "Operating Carrier"</h2>
          <p>
            EU-förordning 261/2004 är tydlig: Det är det flygbolag som <strong>utför flygningen</strong> (Operating Carrier) som är ansvarigt för kompensation vid förseningar och inställda flyg. Det spelar ingen roll vem du köpte biljetten av (Marketing Carrier).
          </p>

          <h3>Exempel 1: SAS-biljett, Lufthansa-flyg</h3>
          <p>
            Du köpte en biljett på sas.se (flightnummer SK3610), men flygningen utförs av Lufthansa från Frankfurt till Stockholm.
            <br />
            <strong>Vem betalar?</strong> Lufthansa. Du ska skicka ditt krav till Lufthansa, inte SAS.
          </p>

          <h3>Exempel 2: SAS-biljett, United Airlines-flyg</h3>
          <p>
            Du flyger från New York till Stockholm. Biljetten är köpt hos SAS, men du flyger med United Airlines.
            <br />
            <strong>Vem betalar?</strong> Här blir det krångligt.
            <br />
            - Om flyget går FRÅN Europa (t.ex. Stockholm till New York med United): EU-reglerna gäller inte för United (icke-EU bolag), såvida inte flygningen startar i ett EU-land.
            <br />
            - Om flyget går TILL Europa (t.ex. New York till Stockholm med United): Inga EU-rättigheter gäller, eftersom United inte är ett EU-bolag. Du får ingen ersättning enligt EU261.
          </p>

          <h2>Hur vet jag vem som flyger?</h2>
          <p>
            Titta på din bokningsbekräftelse eller boardingkort. Där står det ofta "Operated by..." eller "Utförs av...".
          </p>
          <ul>
            <li><strong>SK123:</strong> Vanligtvis SAS eget plan.</li>
            <li><strong>SK3000-SK9999:</strong> Ofta codeshare (ett annat bolag flyger).</li>
          </ul>

          <h2>CityJet och Xfly (SAS Connect/Link)</h2>
          <p>
            Många SAS-flygningar utförs av underleverantörer som CityJet eller Xfly, men planen är målade i SAS färger och personalen har SAS-uniformer.
            <br />
            <strong>Vem betalar?</strong> I dessa fall är det SAS som ansvarar, eftersom de hyr in hela kapaciteten (wet lease) och agerar som operativt bolag gentemot dig.
          </p>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Globe className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Förvirrad över vem som ska betala?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Codeshare-regler är snåriga. Vi reder ut vem som är ansvarig och ser till att du får dina pengar.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=sas-codeshare" target="_blank" rel="nofollow noreferrer noopener">
              Låt oss sköta kontakten
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
