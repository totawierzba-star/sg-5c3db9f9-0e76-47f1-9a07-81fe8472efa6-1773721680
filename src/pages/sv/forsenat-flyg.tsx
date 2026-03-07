import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle, HelpCircle, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SvDelayedFlight() {
  return (
    <LayoutSv>
      <SEO
        title="Ersättning för Försenat Flyg | Regler & Rättigheter 2025"
        description="Få ersättning för försenat flyg. Lär dig dina rättigheter enligt EU-förordning 261/2004. Upp till 600 € kompensation."
        url="https://lotproblem.pl/sv/forsenat-flyg"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Ersättning för Försenat Flyg
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Har ditt flyg blivit försenat? Om du anlände till din destination mer än 3 timmar senare än planerat kan du ha rätt till mellan 250 € och 600 € i ersättning enligt EU-lagstiftning.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-10 rounded-r-lg">
          <div className="flex items-start">
            <Clock className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Snabbfakta om ersättning:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Gäller vid ankomstförsening på <strong>3+ timmar</strong></li>
                <li>Ersättning: <strong>250 € - 600 €</strong> beroende på sträcka</li>
                <li>Gäller alla flyg från EU och flyg till EU med EU-flygbolag</li>
                <li>Du kan kräva ersättning upp till <strong>3 år</strong> bakåt (i Sverige 10 år, men 3 år rekommenderas)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv/forsenat-flyg?utm_source=problemlot-sv&utm_medium=delayed_page_top" target="_blank" rel="nofollow noreferrer noopener">
              Kolla Ersättning för Försening
            </a>
          </Button>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Hur mycket pengar kan du få?</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Ersättningsbeloppet beror på flygsträckan, inte biljettpriset. Här är nivåerna:
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center bg-white dark:bg-gray-800">
            <div className="text-3xl font-bold text-blue-600 mb-2">250 €</div>
            <p className="text-sm text-gray-500 mb-2">Flyg upp till 1500 km</p>
            <p className="text-xs text-gray-400">(t.ex. Stockholm - Berlin)</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center bg-white dark:bg-gray-800">
            <div className="text-3xl font-bold text-blue-600 mb-2">400 €</div>
            <p className="text-sm text-gray-500 mb-2">Flyg inom EU {'>'} 1500 km eller övriga 1500-3500 km</p>
            <p className="text-xs text-gray-400">(t.ex. Stockholm - Gran Canaria)</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center bg-white dark:bg-gray-800">
            <div className="text-3xl font-bold text-blue-600 mb-2">600 €</div>
            <p className="text-sm text-gray-500 mb-2">Flyg utanför EU {'>'} 3500 km</p>
            <p className="text-xs text-gray-400">(t.ex. Stockholm - New York, om försenat 4+ h)</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">När har du INTE rätt till ersättning?</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Flygbolaget behöver inte betala om förseningen beror på så kallade <strong>extraordinära omständigheter</strong> som ligger utanför deras kontroll:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700 dark:text-gray-300">
          <li>Extremt väder (snöstormar, dimma, vulkanaska)</li>
          <li>Strejker hos flygledningen (ATC) eller flygplatspersonal (ej flygbolagets egen personal)</li>
          <li>Politiska oroligheter eller terrorhot</li>
          <li>Akuta sjukdomsfall ombord</li>
          <li>Fågelkollisioner (ibland)</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 mb-8 italic">
          OBS: Tekniska fel räknas oftast INTE som extraordinära omständigheter. Flygbolaget ansvarar för underhåll av sina flygplan.
        </p>

        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Vanliga frågor</h2>
        <Accordion type="single" collapsible className="w-full mb-12">
          <AccordionItem value="item-1">
            <AccordionTrigger>Kan jag få ersättning för en gammal försening?</AccordionTrigger>
            <AccordionContent>
              Ja, i Sverige är preskriptionstiden generellt 10 år, men vi rekommenderar att söka inom 3 år för att ha bäst chans att säkra bevis. I många andra EU-länder är gränsen 2-3 år.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Vad om flygbolaget erbjuder en voucher?</AccordionTrigger>
            <AccordionContent>
              Du behöver inte acceptera en voucher. EU-förordningen ger dig rätt till kontant ersättning. Om du accepterar en voucher kan du förlora rätten att kräva pengar senare.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Gäller reglerna för charterflyg?</AccordionTrigger>
            <AccordionContent>
              Ja, EU-förordning 261/2004 gäller för både reguljärflyg och charterflyg (t.ex. TUI, Ving, Apollo) så länge flyget avgår från EU eller utförs av ett EU-flygbolag.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Osäker på dina rättigheter?</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Det kostar ingenting att kontrollera. Fyll i ditt flygnummer så berättar vi direkt om du kan få ersättning.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv/forsenat-flyg?utm_source=problemlot-sv&utm_medium=delayed_page_bottom" target="_blank" rel="nofollow noreferrer noopener">
              Kontrollera mitt flyg gratis
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}