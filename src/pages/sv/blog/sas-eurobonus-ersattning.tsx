import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Award, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SasEurobonusPage() {
  return (
    <LayoutSv>
      <SEO
        title="SAS EuroBonus-biljett och försening — kan du fortfarande kräva ersättning?"
        description="Betalade du resan med EuroBonus-poäng? Du har ändå rätt till kontantersättning vid försening. Låt inte SAS lura dig."
        url="https://lotproblem.pl/sv/blog/sas-eurobonus-ersattning"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/sv/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-4 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Tillbaka till bloggen
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              SAS EuroBonus
            </span>
            <span className="text-gray-500 text-sm">6 mars 2025</span>
            <span className="text-gray-500 text-sm">• 4 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            EuroBonus-resa försenad? Du ska ha riktiga pengar, inte poäng!
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            En vanlig myt är att bonusresor inte ger rätt till ersättning enligt EU-lag. Detta är 100% fel. Lagen skiljer inte på hur du betalade.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            Bonusresa = Riktig ersättning
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Du kan få upp till 600 € i kontanter, även om biljetten var "gratis".
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv/forsenat-flyg?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=sas-eurobonus" target="_blank" rel="nofollow noreferrer noopener">
              Kräv kontanter nu
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Vad säger lagen om bonusresor?</h2>
          <p>
            EU-förordning 261/2004 gäller för alla passagerare som har en bekräftad bokning, så länge biljetten inte är en "gratisbiljett som inte är tillgänglig för allmänheten" (t.ex. personalbiljetter).
          </p>
          <p>
            <strong>EuroBonus-biljetter är inte gratisbiljetter</strong> i lagens mening. Du har "betalat" med dina intjänade poäng. Därför har du fullt skydd.
          </p>

          <h2>Vad försöker flygbolagen göra?</h2>
          <p>
            SAS och andra bolag försöker ofta erbjuda poäng som kompensation.
            <br />
            <em>"Vi är ledsna för förseningen. Här får du 5000 EuroBonus-poäng som plåster på såren."</em>
          </p>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-md border border-red-200 dark:border-red-800 my-4">
            <h4 className="font-bold text-red-800 dark:text-red-200">VARNING!</h4>
            <p className="text-sm">
              Acceptera INTE poäng om det innebär att du avsäger dig rätten till kontantersättning. 5000 poäng är värt kanske 500 kr. Din lagstadgade rätt kan vara värd 600 € (ca 6800 kr). Det är en dålig affär.
            </p>
          </div>

          <h2>2-4-1 Vouchers (American Express)</h2>
          <p>
            Även om du använt en "2-för-1" voucher från Amex för att boka resan, har båda passagerarna rätt till full ersättning (t.ex. 2 x 600 €) vid kraftig försening.
          </p>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Coins className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Fick du poäng istället för pengar?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Du kan fortfarande kräva mellanskillnaden. Vi hjälper dig att få riktiga pengar.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=sas-eurobonus" target="_blank" rel="nofollow noreferrer noopener">
              Starta ärende
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
