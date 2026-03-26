import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Clock, AlertCircle, CheckCircle, ArrowRight, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SasDelayedFlight() {
  return (
    <LayoutSv>
      <SEO
        title="Ersättning för försenat SAS-flyg | Komplett Guide 2025"
        description="Var ditt SAS-flyg försenat? Läs vår kompletta guide om hur du får upp till 600 € i ersättning från SAS. Regler, belopp och steg-för-steg instruktioner."
        url="https://problemlot.com/sv/blog/sas-forsenat-flyg-ersattning"
        image="/images/sas-delayed-guide.png"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/sv/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-4 transition-colors">
            <ArrowRight className="h-4 w-4 mr-2 rotate-180" /> Tillbaka till bloggen
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium dark:bg-blue-900 dark:text-blue-100">SAS Guide</span>
            <span className="text-gray-500 text-sm dark:text-gray-400">8 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Ersättning för försenat SAS-flyg — komplett guide 2025
          </h1>

          <div className="flex items-center text-gray-500 text-sm mb-8 border-b border-gray-100 dark:border-gray-800 pb-8">
            <span className="mr-4">Av <strong>Anna Lindberg</strong></span>
            <time dateTime="2025-03-06">6 mars 2025</time>
          </div>

          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            SAS (Scandinavian Airlines) är många svenskars förstahandsval, men även punktliga flygbolag drabbas av förseningar. Om ditt SAS-flyg var kraftigt försenat har du starka rättigheter enligt EU-lagstiftning. I denna guide går vi igenom exakt vad som krävs för att få upp till 600 € (ca 6 800 kr) i ersättning.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800 mb-10">
            <h3 className="font-bold text-lg mb-4 text-blue-900 dark:text-blue-100">Kollade du din ersättning?</h3>
            <p className="mb-4 text-blue-800 dark:text-blue-200">
              Innan du läser vidare kan du snabbt kontrollera om du har rätt till pengar. Det är gratis och tar bara 3 minuter.
            </p>
            <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <a href="https://claimwinger.com/sv/forsenat-flyg?utm_source=problemlot-sv&utm_medium=blog_sas_delayed_intro" target="_blank" rel="nofollow noreferrer noopener">
                Kolla ditt SAS-flyg nu
              </a>
            </Button>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">När måste SAS betala ersättning?</h2>
          <p>
            Enligt EU-förordning 261/2004 har du rätt till kompensation om ditt flyg uppfyller följande kriterier:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Försening vid ankomst:</strong> Du anlände till din slutdestination mer än 3 timmar senare än den ursprungliga tidtabellen.</li>
            <li><strong>SAS ansvar:</strong> Förseningen orsakades av faktorer inom SAS kontroll (t.ex. tekniska fel, schemaläggningsproblem, personalbrist).</li>
            <li><strong>Giltig rutt:</strong> Eftersom SAS är ett EU-flygbolag gäller reglerna för alla deras flygningar, oavsett om de avgår från eller landar i EU.</li>
          </ul>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border-l-4 border-yellow-400 my-8">
            <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              Viktigt om "tekniska fel"
            </h3>
            <p className="text-yellow-800 dark:text-yellow-200">
              SAS försöker ofta hävda att tekniska fel är "extraordinära omständigheter". Detta är oftast felaktigt. EU-domstolen har fastslagit att tekniskt underhåll är en del av flygbolagets normala verksamhet. <strong>Acceptera inte ett nej på grund av tekniskt fel!</strong>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Hur mycket kan jag få?</h2>
          <p>
            Ersättningsbeloppet baseras på flygsträckan, inte på hur mycket din biljett kostade.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">250 €</div>
              <p className="text-sm font-semibold">Korta flyg (&lt; 1500 km)</p>
              <p className="text-xs text-gray-500 mt-2">T.ex. Stockholm – Oslo, Göteborg – London</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">400 €</div>
              <p className="text-sm font-semibold">Mellanlånga flyg (1500-3500 km)</p>
              <p className="text-xs text-gray-500 mt-2">T.ex. Stockholm – Alicante, Malmö – Rom</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">600 €</div>
              <p className="text-sm font-semibold">Långa flyg (&gt; 3500 km)</p>
              <p className="text-xs text-gray-500 mt-2">T.ex. Köpenhamn – New York, Stockholm – Tokyo</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Undantag: När slipper SAS betala?</h2>
          <p>
            Det finns situationer där SAS faktiskt inte behöver betala ersättning, så kallade <em>extraordinära omständigheter</em>. Dessa inkluderar:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Extremt väder:</strong> Snöstormar som stänger flygplatsen, tät dimma eller vulkanaska.</li>
            <li><strong>Flygledningsstrejk:</strong> Om personalen i tornet (ATC) strejkar. (OBS: SAS egen personalstrejk ger oftast RÄTT till ersättning).</li>
            <li><strong>Politiska oroligheter:</strong> Terrorhot eller krigssituationer.</li>
            <li><strong>Akuta sjukdomsfall:</strong> Om planet måste nödlanda för att rädda en passagerare.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Dina rättigheter på flygplatsen</h2>
          <p>
            Oavsett orsaken till förseningen har du alltid rätt till omvårdnad om du får vänta länge på flygplatsen:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Mat och dryck:</strong> Efter 2 timmars väntan.</li>
            <li><strong>Kommunikation:</strong> Två gratis telefonsamtal eller e-postmeddelanden.</li>
            <li><strong>Hotell:</strong> Om förseningen innebär att du måste vänta över natten, ska SAS betala för hotell och transport dit.</li>
          </ul>

          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl mt-12 mb-12">
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">Har du ett krav mot SAS?</h3>
            <p className="text-center mb-6 text-gray-600 dark:text-gray-300">
              Många passagerare ger upp för lätt. Låt oss kontrollera ditt fall gratis. Vi tar bara betalt om vi lyckas hämta dina pengar (no win, no fee).
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg" asChild>
                <a href="https://claimwinger.com/sv/forsenat-flyg?utm_source=problemlot-sv&utm_medium=blog_sas_delayed_bottom" target="_blank" rel="nofollow noreferrer noopener">
                  Starta ditt ärende mot SAS
                </a>
              </Button>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Vanliga frågor om SAS-förseningar</h2>
          <Accordion type="single" collapsible className="w-full mb-12">
            <AccordionItem value="faq-1">
              <AccordionTrigger>SAS erbjöd mig EuroBonus-poäng som kompensation. Ska jag ta dem?</AccordionTrigger>
              <AccordionContent>
                Var försiktig. Ofta är värdet på poängen lägre än den kontanta ersättning du har rätt till (upp till 600 €). Om du accepterar poängen kan du skriva på ett avtal där du avsäger dig rätten till pengar. Vi rekommenderar alltid kontanter.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2">
              <AccordionTrigger>Hur lång tid har jag på mig att kräva ersättning?</AccordionTrigger>
              <AccordionContent>
                I Sverige är preskriptionstiden för flygkompensation 10 år enligt konsumentköplagen, men praxis varierar. Vi rekommenderar starkt att du skickar in ditt krav så snart som möjligt, helst inom 3 år, för att undvika problem med bevisning.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3">
              <AccordionTrigger>Gäller reglerna om jag flög med SAS Go Light?</AccordionTrigger>
              <AccordionContent>
                Ja, absolut. Dina passagerarrättigheter enligt EU 261/2004 gäller oavsett vilken biljetklass du köpt. Det spelar ingen roll om du betalade 500 kr eller 5000 kr för biljetten.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </article>
    </LayoutSv>
  );
}
