import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Calendar, RefreshCcw, ArrowRight, Euro } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SvCancelledFlight() {
  return (
    <LayoutSv>
      <SEO
        title="Ersättning för Inställt Flyg | Dina Rättigheter & Återbetalning"
        description="Blev ditt flyg inställt? Du kan ha rätt till både återbetalning och upp till 600 € i ersättning. Läs om dina rättigheter här."
        url="https://lotproblem.pl/sv/installat-flyg"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Ersättning för Inställt Flyg
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Ett inställt flyg förstör resplanerna, men du har starka rättigheter. Om flygbolaget meddelade dig mindre än 14 dagar före avgång kan du ha rätt till upp till 600 € i ersättning utöver återbetalning eller ombokning.
        </p>

        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-6 mb-10 rounded-r-lg">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">När får du ersättning?</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Inställt <strong>mindre än 14 dagar</strong> före avgång</li>
                <li>Ersättning: <strong>125 € - 600 €</strong></li>
                <li>Du har ALLTID rätt till antingen återbetalning ELLER ombokning (ditt val)</li>
                <li>Mat och hotell ska täckas om du måste vänta på nytt flyg</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv/installat-flyg?utm_source=problemlot-sv&utm_medium=cancelled_page_top" target="_blank" rel="nofollow noreferrer noopener">
              Kolla Ersättning för Inställt Flyg
            </a>
          </Button>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Ersättning vs. Återbetalning</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 className="text-xl font-bold mb-3 flex items-center text-blue-600">
              <RefreshCcw className="mr-2 h-5 w-5" /> Återbetalning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Du får tillbaka pengarna för biljetten om du väljer att inte resa, eller om flygbolaget inte kan erbjuda en lämplig ombokning. Detta gäller OAVSETT orsak till inställningen.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 className="text-xl font-bold mb-3 flex items-center text-green-600">
              <Euro className="mr-2 h-5 w-5" /> Kompensation
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Extra pengar (upp till 600 €) för besväret. Detta gäller om inställningen var inom flygbolagets kontroll och meddelades sent ({'<'} 14 dagar).
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Tidsgränser för meddelande</h2>
        <div className="space-y-6 mb-12">
          <div className="flex items-start">
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded font-bold mr-4 min-w-[120px] text-center">Mer än 14 dagar</div>
            <div>
              <p className="font-semibold">Ingen kompensation</p>
              <p className="text-gray-600 dark:text-gray-400">Men du har rätt till återbetalning eller ombokning.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded font-bold mr-4 min-w-[120px] text-center">7 - 14 dagar</div>
            <div>
              <p className="font-semibold">Kompensation möjlig</p>
              <p className="text-gray-600 dark:text-gray-400">Om det nya flyget avgår mer än 2 timmar tidigare eller anländer mer än 4 timmar senare.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-red-100 text-red-800 px-3 py-1 rounded font-bold mr-4 min-w-[120px] text-center">Mindre än 7 dagar</div>
            <div>
              <p className="font-semibold">Kompensation mycket sannolik</p>
              <p className="text-gray-600 dark:text-gray-400">Om det nya flyget avgår mer än 1 timme tidigare eller anländer mer än 2 timmar senare.</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Vanliga frågor</h2>
        <Accordion type="single" collapsible className="w-full mb-12">
          <AccordionItem value="item-1">
            <AccordionTrigger>Kan jag få både ny biljett och ersättning?</AccordionTrigger>
            <AccordionContent>
              Ja! Om flygbolaget bokar om dig men du ändå blir försenad till slutdestinationen, eller om du informerades sent, kan du ha rätt till BÅDE resan (ombokning) OCH kontant ersättning.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Vad händer om flygbolaget går i konkurs?</AccordionTrigger>
            <AccordionContent>
              Tyvärr är det ofta svårt att få ersättning vid konkurs. Om du betalat med kreditkort kan du dock reklamera köpet hos din bank (chargeback).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Vem betalar för hotell om jag strandas?</AccordionTrigger>
            <AccordionContent>
              Flygbolaget är skyldigt att betala för hotell och transport mellan flygplats och hotell om du måste vänta över natten på grund av ett inställt flyg, oavsett orsak (även vid dåligt väder).
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Blev ditt flyg inställt?</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Låt inte flygbolaget slippa undan. Vi hjälper dig att kräva både återbetalning och ersättning.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv/installat-flyg?utm_source=problemlot-sv&utm_medium=cancelled_page_bottom" target="_blank" rel="nofollow noreferrer noopener">
              Sök ersättning nu
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
