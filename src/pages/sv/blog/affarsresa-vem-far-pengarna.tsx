import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Briefcase, Building2, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BusinessTravelPage() {
  return (
    <LayoutSv>
      <SEO
        title="Affärsresa och försenat flyg — vem får ersättningen (du eller företaget)?"
        description="Företaget betalade biljetten, men flyget var försenat. Vem ska ha de 600 €? Lagen är tydlig: Det är passagerarens pengar. Läs varför."
        url="https://lotproblem.pl/sv/blog/affarsresa-vem-far-pengarna"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/sv/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-4 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Tillbaka till bloggen
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              Jobb & Affärsresa
            </span>
            <span className="text-gray-500 text-sm">6 mars 2025</span>
            <span className="text-gray-500 text-sm">• 5 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Jobbresa: Är ersättningen din eller chefens?
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Chefen betalade biljetten. Du fick sitta på flygplatsen i 5 timmar. Vem förtjänar de 600 € i plåster på såren? Svaret kommer att göra dig glad.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-gray-50 dark:bg-gray-800 border-l-4 border-gray-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
            Reser du ofta i jobbet?
          </h3>
          <p className="text-gray-800 dark:text-gray-200 mb-4">
            Många affärsresenärer går miste om tusentals kronor varje år för att de tror att pengarna tillhör företaget.
          </p>
          <Button size="lg" className="bg-gray-800 hover:bg-gray-900 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=business-travel" target="_blank" rel="nofollow noreferrer noopener">
              Sök ersättning privat
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Lagen skyddar PASSAGERAREN, inte betalaren</h2>
          <p>
            EU-förordning 261/2004 är en konsumentskyddslagstiftning. Syftet är att kompensera den individ som drabbats av olägenheten (väntan, stress, missad tid).
          </p>
          <p>
            Därför säger reglerna tydligt: <strong>Rätten till ersättning tillfaller den passagerare som har sitt namn på biljetten.</strong>
          </p>
          <p>
            Det spelar ingen roll vem som drog kortet (företaget, en resebyrå, eller din partner). Det är DU som satt på stolen (eller gaten), alltså är det DU som ska ha pengarna.
          </p>

          <h2>Undantag: Vad står i ditt anställningsavtal?</h2>
          <p>
            Detta är det enda hindret. Vissa (stora) företag har policys där det står: <em>"All ersättning från flygbolag i samband med tjänsteresor tillfaller arbetsgivaren."</em>
          </p>
          <ul>
            <li>Om detta står i ditt avtal &rarr; Du måste ge pengarna till firman.</li>
            <li>Om det INTE står (vilket är vanligast) &rarr; Pengarna är dina, skattefritt!</li>
          </ul>
          <p>
            <strong>OBS:</strong> Även om pengarna tillfaller företaget, är det sällan de själva orkar söka dem. Du kan ofta erbjuda dig att hantera ärendet.
          </p>

          <h2>Återbetalning av biljett vs. Kompensation</h2>
          <p>
            Viktigt att skilja på två saker:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Återbetalning av biljettpriset</strong> (om resan ställdes in och du inte åkte):
              <br />
              Dessa pengar ska tillbaka till den som betalade (företaget).
            </li>
            <li>
              <strong>Standardersättning (250-600 €)</strong>:
              <br />
              Detta är "skadestånd" för din tid. Dessa pengar är dina.
            </li>
          </ol>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Briefcase className="w-12 h-12 mx-auto text-gray-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">En trevlig bonus på lönen?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Kolla dina gamla tjänsteresor (upp till 3 år tillbaka i Sverige, 10 år om SAS/Sverige domstol, men ofta 3 år).
          </p>
          <Button size="lg" className="bg-gray-800 hover:bg-gray-900 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=business-travel" target="_blank" rel="nofollow noreferrer noopener">
              Sök ersättning nu
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
