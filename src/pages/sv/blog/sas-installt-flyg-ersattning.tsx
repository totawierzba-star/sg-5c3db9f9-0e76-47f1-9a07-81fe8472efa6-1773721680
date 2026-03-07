import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { AlertTriangle, Calendar, Euro, ArrowRight, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SasCancelledFlight() {
  return (
    <LayoutSv>
      <SEO
        title="SAS ställde in flyget | Hur får du upp till 600 € i ersättning?"
        description="Blev ditt SAS-flyg inställt? Läs om dina rättigheter till ombokning, återbetalning och kompensation upp till 600 €. Guide för drabbade passagerare."
        url="https://lotproblem.pl/sv/blog/sas-installt-flyg-ersattning"
        image="/images/sas-cancelled-guide.png"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/sv/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-4 transition-colors">
            <ArrowRight className="h-4 w-4 mr-2 rotate-180" /> Tillbaka till bloggen
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium dark:bg-red-900 dark:text-red-100">SAS Guide</span>
            <span className="text-gray-500 text-sm dark:text-gray-400">9 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            SAS ställde in flyget — hur får du upp till 600 € i ersättning?
          </h1>

          <div className="flex items-center text-gray-500 text-sm mb-8 border-b border-gray-100 dark:border-gray-800 pb-8">
            <span className="mr-4">Av <strong>Anna Lindberg</strong></span>
            <time dateTime="2025-03-06">6 mars 2025</time>
          </div>

          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            Ett inställt flyg är en mardröm för alla resenärer. Plötsligt står du där utan resa, kanske mitt i semestern eller på väg till ett viktigt möte. Men visste du att SAS ofta är skyldiga att betala dig både en ny resa OCH kontant ersättning? Här reder vi ut begreppen.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800 mb-10">
            <h3 className="font-bold text-lg mb-4 text-blue-900 dark:text-blue-100">Inställt SAS-flyg?</h3>
            <p className="mb-4 text-blue-800 dark:text-blue-200">
              Kolla snabbt om du har rätt till 600 € i kompensation. Det kostar inget att prova.
            </p>
            <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <a href="https://claimwinger.com/sv/installat-flyg?utm_source=problemlot-sv&utm_medium=blog_sas_cancelled_intro" target="_blank" rel="nofollow noreferrer noopener">
                Kolla ditt inställda SAS-flyg
              </a>
            </Button>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Dina två huvudrättigheter vid inställt flyg</h2>
          <p>
            När SAS ställer in ditt flyg har du alltid två separata rättigheter att hålla reda på. Blanda inte ihop dem!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-3 flex items-center text-blue-600">
                1. Rätten till återbetalning eller ombokning
              </h3>
              <p>
                Detta gäller <strong>ALLTID</strong>, oavsett varför flyget ställdes in (även vid väderkaos). Du får välja mellan:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Full återbetalning av biljetten (inom 7 dagar).</li>
                <li>Ombokning till nästa lediga flyg (med SAS eller annat bolag).</li>
                <li>Ombokning till ett senare datum som passar dig.</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-3 flex items-center text-green-600">
                2. Rätten till kompensation
              </h3>
              <p>
                Detta är "plåster på såren" (upp till 600 €). Detta gäller om:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Inställningen var SAS fel (inte extraordinära omständigheter).</li>
                <li>Du informerades <strong>mindre än 14 dagar</strong> före avgång.</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">När får du ersättning? (14-dagarsregeln)</h2>
          <p>
            Tidpunkten då SAS informerade dig om det inställda flyget är avgörande:
          </p>

          <div className="space-y-6 my-8">
            <div className="flex flex-col md:flex-row gap-4 p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/10">
              <div className="md:w-1/4 font-bold text-green-800 dark:text-green-300">Mer än 14 dagar innan</div>
              <div className="md:w-3/4">Ingen kompensation. SAS har rätt att ställa in flyg med god framförhållning. Du har dock fortfarande rätt till återbetalning eller ombokning.</div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 p-4 border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/10">
              <div className="md:w-1/4 font-bold text-yellow-800 dark:text-yellow-300">7-14 dagar innan</div>
              <div className="md:w-3/4">
                Kompensation utgår OM ditt nya flyg (ombokningen):
                <ul className="list-disc pl-5 mt-1">
                  <li>Avgår mer än 2 timmar tidigare än ursprungligt, ELLER</li>
                  <li>Anländer mer än 4 timmar senare än ursprungligt.</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/10">
              <div className="md:w-1/4 font-bold text-red-800 dark:text-red-300">Mindre än 7 dagar innan</div>
              <div className="md:w-3/4">
                Kompensation utgår OM ditt nya flyg (ombokningen):
                <ul className="list-disc pl-5 mt-1">
                  <li>Avgår mer än 1 timme tidigare än ursprungligt, ELLER</li>
                  <li>Anländer mer än 2 timmar senare än ursprungligt.</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Ersättningsnivåer</h2>
          <ul className="list-none pl-0 space-y-4 mb-6">
            <li className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <span className="text-2xl mr-4">💶</span>
              <div>
                <strong>250 €</strong> – Flyg upp till 1 500 km (t.ex. inom Skandinavien).
              </div>
            </li>
            <li className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <span className="text-2xl mr-4">💶</span>
              <div>
                <strong>400 €</strong> – Flyg inom EU över 1 500 km, eller andra flyg 1 500 – 3 500 km.
              </div>
            </li>
            <li className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <span className="text-2xl mr-4">💶</span>
              <div>
                <strong>600 €</strong> – Flyg utanför EU över 3 500 km (t.ex. till USA eller Asien).
              </div>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">SAS pilotstrejk – vad gäller?</h2>
          <p>
            SAS har drabbats av flera uppmärksammade pilotstrejker de senaste åren (t.ex. 2022). Enligt en viktig dom i EU-domstolen (mål C-28/20) räknas strejk organiserad av flygbolagets egen personal (piloter, kabinpersonal) som <strong>flygbolagets ansvar</strong>. Det är alltså INTE en extraordinär omständighet.
          </p>
          <p className="font-semibold text-blue-800 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 mt-2">
            Slutsats: Om ditt flyg ställdes in på grund av SAS-personalens strejk har du troligen rätt till ersättning!
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl mt-12 mb-12">
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">Osäker på om du har rätt till pengar?</h3>
            <p className="text-center mb-6 text-gray-600 dark:text-gray-300">
              Vi har hjälpt tusentals SAS-resenärer att få sin ersättning, även när SAS först sa nej.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg" asChild>
                <a href="https://claimwinger.com/sv/installat-flyg?utm_source=problemlot-sv&utm_medium=blog_sas_cancelled_bottom" target="_blank" rel="nofollow noreferrer noopener">
                  Kontrollera ersättning gratis
                </a>
              </Button>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">FAQ - Inställda SAS-flyg</h2>
          <Accordion type="single" collapsible className="w-full mb-12">
            <AccordionItem value="faq-1">
              <AccordionTrigger>SAS bokade om mig till ett flyg dagen efter. Vem betalar hotell?</AccordionTrigger>
              <AccordionContent>
                SAS ska betala. De är skyldiga att ordna hotell och transport mellan flygplatsen och hotellet. Om du fick lägga ut pengar själv, spara alla kvitton – du har rätt att få dem återbetalda utöver din standardersättning.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2">
              <AccordionTrigger>Jag fick tillbaka biljettpengarna. Kan jag fortfarande få 600 €?</AccordionTrigger>
              <AccordionContent>
                Ja! Återbetalning av biljetten och standardersättning (kompensation) är två olika saker. Om du valde att inte resa och fick pengarna tillbaka, kan du fortfarande kräva upp till 600 € i kompensation för besväret, förutsatt att inställningen skedde med kort varsel och var SAS fel.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3">
              <AccordionTrigger>Kan jag boka en ny biljett själv om SAS inte hjälper mig?</AccordionTrigger>
              <AccordionContent>
                Om SAS inte erbjuder en ombokning inom rimlig tid ("vid första möjliga tillfälle"), har du rätt att boka en ny biljett själv med ett annat flygbolag och kräva att SAS betalar mellanskillnaden. Spara alla kvitton och bevis på att du försökt kontakta SAS först.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </article>
    </LayoutSv>
  );
}