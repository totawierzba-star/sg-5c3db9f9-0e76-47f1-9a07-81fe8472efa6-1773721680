import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Globe, Clock, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LufthansaSwedenPage() {
  return (
    <LayoutSv>
      <SEO
        title="Lufthansa försenat flyg från Sverige — missad anslutning"
        description="Flyger du med Lufthansa från Arlanda eller Landvetter? Missade du bytet i Frankfurt/München? Se hur du får 600 € i ersättning."
        url="https://lotproblem.pl/sv/blog/lufthansa-sverige-ersattning"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/sv/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-4 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Tillbaka till bloggen
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Lufthansa & Star Alliance
            </span>
            <span className="text-gray-500 text-sm">6 mars 2025</span>
            <span className="text-gray-500 text-sm">• 6 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Lufthansa från Sverige: Missad anslutning i Tyskland
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            För många svenskar är Lufthansa porten till världen. Men en liten försening på Arlanda kan betyda att du missar flyget i Frankfurt. Här är vad som gäller då.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            Fastnade du i Frankfurt eller München?
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Om du kom fram till slutdestinationen mer än 3 timmar sent, ska Lufthansa betala. Upp till 600 € per person.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=lufthansa-sweden" target="_blank" rel="nofollow noreferrer noopener">
              Kolla om du har rätt till 600 €
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Så fungerar regeln om anslutningsflyg</h2>
          <p>
            Det viktigaste att veta: <strong>Hela resan räknas som en.</strong>
          </p>
          <p>
            Om du flyger Stockholm &rarr; Frankfurt &rarr; New York, och första flyget är 45 minuter försenat så att du missar bytet, blir du ombokad till ett senare flyg.
          </p>
          <p>
            Om du landar i New York mer än <strong>3 timmar senare</strong> än din ursprungliga biljett sa, har du rätt till ersättning för <strong>hela sträckan</strong>.
          </p>

          <h3>Ersättningsnivåer</h3>
          <ul>
            <li><strong>Inom Europa (t.ex. till Rom via Frankfurt):</strong> 400 €</li>
            <li><strong>Till resten av världen (USA, Asien, Afrika):</strong> 600 €</li>
          </ul>

          <h2>Vem betalar om det är code-share (SAS/United)?</h2>
          <p>
            Många flyg säljs som SAS-biljetter (SK-nummer) men flygs av Lufthansa, eller tvärtom.
            <br />
            Regeln är enkel: <strong>Det flygbolag som utförde den försenade flygningen är ansvarigt.</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Om flyget från Arlanda var försenat och det var ett Lufthansa-plan &rarr; Kräv pengar av <strong>Lufthansa</strong>.</li>
            <li>Om flyget från Arlanda var försenat och det var ett SAS-plan &rarr; Kräv pengar av <strong>SAS</strong>.</li>
            <li>Om flyget från USA var försenat och det var United &rarr; Kräv pengar av <strong>United</strong> (Obs: Gäller endast flyg FRÅN Europa med icke-EU bolag).</li>
          </ul>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Globe className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Lufthansa är skyldiga dig pengar?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Tyska flygbolag följer reglerna, men de tar tid på sig. Vi ser till att din ansökan hamnar överst i högen.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=lufthansa-sweden" target="_blank" rel="nofollow noreferrer noopener">
              Sök ersättning från Lufthansa
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}