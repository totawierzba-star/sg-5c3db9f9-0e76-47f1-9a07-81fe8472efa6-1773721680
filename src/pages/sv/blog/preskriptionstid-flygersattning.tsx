import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, History, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StatuteOfLimitationsPage() {
  return (
    <LayoutSv>
      <SEO
        title="10 år på dig att kräva ersättning! — Preskriptionstid i Sverige"
        description="Visste du att du kan kräva ersättning för flygförseningar 10 år tillbaka i tiden i Sverige? Läs om den generösa preskriptionstiden."
        url="https://lotproblem.pl/sv/blog/preskriptionstid-flygersattning"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/sv/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-4 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Tillbaka till bloggen
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
              Lag & Rätt
            </span>
            <span className="text-gray-500 text-sm">6 mars 2025</span>
            <span className="text-gray-500 text-sm">• 4 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Missade du att söka ersättning 2018? Ingen fara – du har 10 år på dig!
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Sverige har en av Europas mest generösa preskriptionstider. Medan polacker bara har 1 år, kan du som flög från Sverige kräva pengar för gamla synder.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-purple-900 dark:text-purple-100 mb-2">
            Gräv i dina gamla mail!
          </h3>
          <p className="text-purple-800 dark:text-purple-200 mb-4">
            Hitta en gammal bokningsbekräftelse från en försenad resa (upp till 10 år sedan). Det kan vara värt 600 €.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=statute-limitations" target="_blank" rel="nofollow noreferrer noopener">
              Kolla gamla flygningar gratis
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Vad säger lagen?</h2>
          <p>
            I Sverige tillämpas den allmänna preskriptionstiden på <strong>10 år</strong> för flygkompensation (enligt Preskriptionslagen).
          </p>
          <p>
            Detta bekräftades av Högsta domstolen i det kända "SAS-målet" (NJA 2018 s. 127). Flygbolagen försökte hävda att 2 månader eller 2 år gällde, men förlorade.
          </p>

          <h3>Vad innebär detta för dig?</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Du kan söka ersättning för en resa du gjorde 2016.</li>
            <li>Du behöver inte ha kvar pappersbiljetten – digitala bevis räcker.</li>
            <li>Det gäller flyg <strong>från</strong> Sverige, samt flyg <strong>till</strong> Sverige med svenska/EU-bolag.</li>
          </ul>

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 my-8 dark:bg-yellow-900/10 dark:border-yellow-800">
            <h4 className="font-bold text-yellow-800 dark:text-yellow-100 mb-2 flex items-center gap-2">
              <History className="w-5 h-5" /> Undantag
            </h4>
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              Om du flög med ett utomeuropeiskt bolag (t.ex. Thai Airways, Emirates) från deras hemland till Sverige, gäller inte EU-reglerna. Men om resan startade i Sverige gäller 10 år.
            </p>
          </div>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Clock className="w-12 h-12 mx-auto text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Gamla pengar är också pengar</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Låt oss gå igenom din historik. Det kostar inget att kolla.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=statute-limitations" target="_blank" rel="nofollow noreferrer noopener">
              Sök för gamla resor
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
