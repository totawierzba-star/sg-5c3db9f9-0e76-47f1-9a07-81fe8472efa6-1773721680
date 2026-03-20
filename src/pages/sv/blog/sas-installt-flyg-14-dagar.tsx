import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Calendar, AlertCircle, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SasCancelled14DaysPage() {
  return (
    <LayoutSv>
      <SEO
        title="SAS ställde in flyget mindre än 14 dagar före avgång — ersättning"
        description="Fick du veta att ditt SAS-flyg ställts in mindre än 14 dagar före resan? Du har rätt till upp till 600 €. Läs om reglerna här."
        url="https://lotproblem.pl/sv/blog/sas-installt-flyg-14-dagar"
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
            <span className="text-gray-500 text-sm">• 7 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            SAS ställde in flyget mindre än 14 dagar före avgång — maximal ersättning
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            14 dagar. Det är den magiska gränsen. Om SAS informerar dig om ett inställt flyg senare än två veckor före planerad avgång, har de brutit mot EU-reglerna – och du ska ha betalt.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            Fick du beskedet sent?
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Om SAS ställde in flyget med kort varsel har du sannolikt rätt till 250-600 €.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv/installat-flyg?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=sas-14-days" target="_blank" rel="nofollow noreferrer noopener">
              Kontrollera din ersättning
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Varför är 14 dagar så viktigt?</h2>
          <p>
            Enligt EU-förordning 261/2004 anses en passagerare ha tillräckligt med tid att planera om sin resa om de får besked mer än 14 dagar i förväg. Då behöver flygbolaget inte betala ersättning (bara återbetala biljetten eller boka om).
          </p>
          <p>
            Men om beskedet kommer <strong>13 dagar eller mindre</strong> före avresa, anses det vara en betydande olägenhet. Då har du rätt till kompensation.
          </p>

          <h2>Regler för 7-14 dagar före avgång</h2>
          <p>
            Om du fick veta om det inställda flyget mellan 7 och 14 dagar före resan, gäller följande. Du får ersättning OM INTE:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>SAS erbjöd ett nytt flyg som avgår max <strong>2 timmar tidigare</strong> än ursprungligt flyg.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>OCH som landar max <strong>4 timmar senare</strong> än ursprungligt flyg.</span>
            </li>
          </ul>
          <p>
            Klarar SAS inte dessa gränser? Då ska de betala kompensation på 250, 400 eller 600 euro per person.
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-8 border border-yellow-100 dark:border-yellow-800">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-yellow-600" />
              Exempel: SAS ställer in Arlanda–London
            </h3>
            <p className="mb-2"><strong>Original:</strong> Avgång 10:00, Ankomst 11:45</p>
            <p className="mb-2"><strong>Nytt flyg:</strong> Avgång 14:00, Ankomst 15:45</p>
            <p className="mt-4 font-semibold text-green-700 dark:text-green-400">
              Resultat: Rätt till ersättning!
            </p>
            <p className="text-sm mt-1">
              Varför? Det nya flyget ankom mer än 4 timmar senare än det ursprungliga skulle ha gjort. Du får 250 € (sträcka under 1500 km).
            </p>
          </div>

          <h2>Vad gäller för återbetalning?</h2>
          <p>
            Oavsett när SAS ställer in flyget har du <strong>alltid</strong> rätt att välja mellan:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Full återbetalning</strong> av biljettpriset (inom 7 dagar).</li>
            <li><strong>Ombokning</strong> till nästa lediga flyg (även med andra bolag om SAS inte har egna).</li>
          </ol>
          <p className="mt-4">
            OBS: Om du väljer återbetalning och inte åker, får du ingen ersättning för "försening" vid ankomst, men du har fortfarande rätt till schablonersättningen (250-600 €) för själva inställningen, om inte undantagen ovan gäller.
          </p>

          <h2>Hur kräver du din rätt?</h2>
          <p>
            SAS försöker ofta neka ersättning genom att hävda "extraordinära omständigheter" eller att de erbjöd en "rimlig ombokning". Låt dem inte komma undan med det.
          </p>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Calendar className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Inställt 14 dagar före?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Missade du gränsen precis? Eller var det i sista minuten? Vi kollar ditt ärende gratis.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv/installat-flyg?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=sas-14-days" target="_blank" rel="nofollow noreferrer noopener">
              Få din ersättning
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
