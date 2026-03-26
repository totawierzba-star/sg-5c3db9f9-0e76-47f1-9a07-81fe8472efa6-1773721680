import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, RefreshCcw, Banknote, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SasRefundVsCompensationPage() {
  return (
    <LayoutSv>
      <SEO
        title="Ersättning vs. Återbetalning hos SAS — Vad är skillnaden?"
        description="Blandar du ihop återbetalning av biljetten med EU-ersättning? Läs vår guide om när du har rätt till båda från SAS. Upp till 600 € extra."
        url="https://problemlot.com/sv/blog/sas-ersattning-vs-aterbetalning"
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
            Ersättning vs. Återbetalning hos SAS — Vad är skillnaden?
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Många resenärer tror att om SAS betalar tillbaka pengarna för biljetten så är saken ur världen. Det är fel! Återbetalning och kompensation är två helt olika saker enligt EU-lag. Ofta har du rätt till båda.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            Fick du bara pengarna tillbaka för biljetten?
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Du kan gå miste om upp till 600 € i extra kompensation. Kontrollera din rättighet gratis.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv/installat-flyg?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=sas-refund-vs-comp" target="_blank" rel="nofollow noreferrer noopener">
              Kolla om du får mer pengar
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Två olika begrepp</h2>
          <p>
            För att förstå dina rättigheter måste vi skilja på begreppen:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-full">
                  <RefreshCcw className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold m-0">Återbetalning (Refund)</h3>
              </div>
              <p className="text-sm">
                <strong>Vad är det?</strong> Pengarna tillbaka för den biljett du köpt men inte kunde utnyttja.
              </p>
              <p className="text-sm">
                <strong>När gäller det?</strong> Om SAS ställer in flyget och du väljer att inte resa med deras ombokningsalternativ, ELLER om förseningen är över 5 timmar och du avstår resan.
              </p>
              <p className="text-sm">
                <strong>Belopp:</strong> Exakt det du betalade för biljetten.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-full">
                  <Banknote className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold m-0">Ersättning (Compensation)</h3>
              </div>
              <p className="text-sm">
                <strong>Vad är det?</strong> Ett skadestånd för det besvär och den tid du förlorat.
              </p>
              <p className="text-sm">
                <strong>När gäller det?</strong> Vid inställda flyg (mindre än 14 dagar före) eller förseningar över 3 timmar vid ankomst.
              </p>
              <p className="text-sm">
                <strong>Belopp:</strong> Fast belopp på 250 €, 400 € eller 600 € (oberoende av biljettpris).
              </p>
            </div>
          </div>

          <h2>När har du rätt till BÅDA?</h2>
          <p>
            Här är det gyllene scenariot där du kan få både biljettpengarna tillbaka OCH kompensation:
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800 my-6">
            <h4 className="font-bold text-green-900 dark:text-green-100 mt-0">Exempel: Inställt flyg till New York</h4>
            <p className="mb-0">
              Du ska flyga Stockholm–New York med SAS. 2 dagar före avresa ställer SAS in flyget. De erbjuder en ombokning 2 dagar senare, vilket inte fungerar för dig. Du stannar hemma.
            </p>
            <ul className="list-none pl-0 mt-4 space-y-2">
              <li className="flex items-center gap-2">
                <Plus className="w-5 h-5 text-green-600" /> <strong>Återbetalning:</strong> Du får tillbaka dina 5 000 kr för biljetten.
              </li>
              <li className="flex items-center gap-2">
                <Plus className="w-5 h-5 text-green-600" /> <strong>Ersättning:</strong> Du får 600 € (ca 6 900 kr) i kompensation enligt EU-regler.
              </li>
              <li className="flex items-center gap-2 pt-2 border-t border-green-200 dark:border-green-800 font-bold">
                <Banknote className="w-5 h-5 text-green-600" /> <strong>Totalt:</strong> 11 900 kr (mer än dubbla biljettpriset!)
              </li>
            </ul>
          </div>

          <h2>När har du INTE rätt till ersättning?</h2>
          <p>
            Även om du får återbetalning för biljetten, slipper SAS betala den extra ersättningen (250-600 €) om:
          </p>
          <ul>
            <li>Du informerades om det inställda flyget mer än 14 dagar i förväg.</li>
            <li>Orsaken var "extraordinära omständigheter" (t.ex. extremt väder eller flygledarstrejk).</li>
          </ul>
          <p>
            <strong>OBS:</strong> Tekniska fel på planet är nästan aldrig en extraordinär omständighet. Då ska SAS betala.
          </p>

          <h2>Vanliga fällor att undvika</h2>
          <ol>
            <li>
              <strong>Acceptera en voucher som "ersättning":</strong> Om SAS ger dig en voucher på biljettbeloppet, se till att du inte samtidigt skriver på att du avstår från EU-kompensationen.
            </li>
            <li>
              <strong>Tro att "återbetalning" är allt:</strong> Många nöjer sig när de ser pengarna för biljetten på kontot. Gör inte det misstaget. Kolla alltid om du har rätt till mer.
            </li>
          </ol>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Banknote className="w-12 h-12 mx-auto text-green-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Få ut varje krona du har rätt till</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Vi hjälper dig att navigera i reglerna. Vi kräver både återbetalning och kompensation från SAS när det är möjligt.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=sas-refund-vs-comp" target="_blank" rel="nofollow noreferrer noopener">
              Starta ditt ärende nu
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
