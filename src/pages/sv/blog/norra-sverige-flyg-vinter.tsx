import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Snowflake, CloudSnow, ThermometerSnowflake } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NorthSwedenWinterPage() {
  return (
    <LayoutSv>
      <SEO
        title="Flygförseningar i norra Sverige (Luleå, Umeå, Kiruna) — vinterregler"
        description="Försenad p.g.a. snö eller avisning? Det räknas inte alltid som 'extraordinära omständigheter'. Se när du kan få ersättning för vinterkaos."
        url="https://lotproblem.pl/sv/blog/norra-sverige-flyg-vinter"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/sv/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-4 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Tillbaka till bloggen
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-cyan-900 dark:text-cyan-300">
              Vinter & Norrland
            </span>
            <span className="text-gray-500 text-sm">6 mars 2025</span>
            <span className="text-gray-500 text-sm">• 5 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Snökaos och avisning: När får du ersättning i Norrland?
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Att flyga till eller från Luleå, Umeå eller Kiruna på vintern innebär risker. Men "dåligt väder" är inte alltid en giltig ursäkt för att slippa betala.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-cyan-50 dark:bg-cyan-900/20 border-l-4 border-cyan-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-cyan-900 dark:text-cyan-100 mb-2">
            Skyllde SAS på vädret?
          </h3>
          <p className="text-cyan-800 dark:text-cyan-200 mb-4">
            Vi kan kolla historiska väderdata. Om andra plan lyfte, har du ett case.
          </p>
          <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=winter-north" target="_blank" rel="nofollow noreferrer noopener">
              Gratis kontroll av ditt flyg
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Avisning (De-icing) är rutin!</h2>
          <p>
            Flygbolagen älskar att skylla på att "avisningen tog längre tid än väntat".
            <br />
            <strong>Men hör upp:</strong> På vintern i Sverige är avisning en helt normal del av flygverksamheten. Det är INTE en extraordinär omständighet.
          </p>
          <p>
            Om förseningen beror på att de-icing-bilen var sen, eller att planeringen sprack, <strong>ska flygbolaget betala ersättning</strong>. De borde ha räknat med vintern!
          </p>

          <h2>När är vädret en giltig ursäkt?</h2>
          <ul>
            <li><strong>JA (Ingen ersättning):</strong> Flygplatsen stängd p.g.a. snöstorm, sikt under säkerhetsgränsen, extrem vind.</li>
            <li><strong>NEJ (Du får ersättning):</strong> "Det snöar lite", "vi saknar avisningsvätska", "personalen kom sent p.g.a. halkan".</li>
          </ul>

          <p>
            En tumregel: Titta ut genom fönstret på flygplatsen. Lyfter andra plan? Då är det förmodligen inte vädret det är fel på, utan ditt flygbolag.
          </p>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Snowflake className="w-12 h-12 mx-auto text-cyan-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Blev du insnöad?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Kolla om du har rätt till 250 € för besväret.
          </p>
          <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=winter-north" target="_blank" rel="nofollow noreferrer noopener">
              Starta ärende
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
