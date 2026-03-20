import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Bed, Coffee, Bus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SasOvernightDelayPage() {
  return (
    <LayoutSv>
      <SEO
        title="SAS försening med övernattning — hotell, måltider och kontantersättning"
        description="Måste du stanna över natten p.g.a. SAS-försening? Du har rätt till gratis hotell, transport och mat. Läs vad som gäller."
        url="https://lotproblem.pl/sv/blog/sas-forsening-med-overnattning"
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
            SAS försening med övernattning — dina rättigheter till hotell och mat
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Att bli strandad på en flygplats över natten är en mardröm. Men om ditt SAS-flyg skjuts upp till nästa dag, har du laglig rätt till betydligt mer än bara en ursäkt.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            Strandad över natten?
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Förutom hotell har du sannolikt rätt till 250-600 € i kompensation.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv/forsenat-flyg?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=sas-overnight" target="_blank" rel="nofollow noreferrer noopener">
              Kräv din ersättning
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Rätt till vård (Right to Care)</h2>
          <p>
            Oavsett varför flyget är försenat – även om det är snöstorm eller strejk – har SAS en absolut skyldighet att ta hand om dig (artikel 9 i EU 261/2004). Detta kallas "rätten till omvårdnad".
          </p>

          <h3>1. Hotellövernattning</h3>
          <div className="flex items-start gap-4 mb-4">
            <Bed className="w-8 h-8 text-blue-600 mt-1" />
            <p>
              Om den nya avgångstiden är dagen efter den ursprungliga (även om det bara är några timmar in på natten), måste SAS erbjuda <strong>gratis hotellrum</strong>.
            </p>
          </div>

          <h3>2. Transport</h3>
          <div className="flex items-start gap-4 mb-4">
            <Bus className="w-8 h-8 text-blue-600 mt-1" />
            <p>
              SAS ska bekosta transporten mellan flygplatsen och hotellet (taxi, buss eller tåg).
            </p>
          </div>

          <h3>3. Mat och dryck</h3>
          <div className="flex items-start gap-4 mb-6">
            <Coffee className="w-8 h-8 text-blue-600 mt-1" />
            <p>
              Du ska få mat och dryck i proportion till väntetiden. Ofta delar SAS ut vouchers. Om du inte får någon, köp mat själv (rimliga belopp, ingen lyxmiddag/alkohol) och spara kvittot.
            </p>
          </div>

          <h2>Vad gör du om SAS inte hjälper till?</h2>
          <p>
            Ibland är SAS markpersonal överbelastad eller borta. Om ingen erbjuder hotell:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Försök kontakta SAS kundtjänst först.</li>
            <li>Om inget svar: Boka ett <strong>rimligt prissatt</strong> hotellrum själv.</li>
            <li>Spara ALLA kvitton (hotell, taxi, mat).</li>
            <li>Kräv återbetalning från SAS i efterhand. De är skyldiga att betala detta.</li>
          </ol>

          <h2>Får du även kontantersättning?</h2>
          <p>
            Ja, troligtvis! Rätten till hotell och mat gäller <em>alltid</em>. Men rätten till skadestånd (250-600 €) beror på orsaken till förseningen.
          </p>
          <ul>
            <li><strong>Tekniskt fel/Personalbrist:</strong> JA, du får både hotell + upp till 600 €.</li>
            <li><strong>Dåligt väder/Flygledarstrejk:</strong> Du får hotell och mat, men ingen kontantersättning.</li>
          </ul>

          <h2>Viktigt att tänka på</h2>
          <p>
            Acceptera inte en voucher som "full kompensation" om du skriver på att du avsäger dig framtida krav. Matkuponger är okej, men skriv inte på något om att du avstår från din lagliga rätt till skadestånd.
          </p>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Bed className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Fick du betala hotellet själv?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Vi hjälper dig att få tillbaka pengarna för utlägg OCH din lagstadgade ersättning.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=sas-overnight" target="_blank" rel="nofollow noreferrer noopener">
              Få ersättning + utlägg
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
