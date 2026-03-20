import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Globe, Plane, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function USFlightsPage() {
  return (
    <LayoutSv>
      <SEO
        title="Flyg till/från USA — när gäller EU-reglerna för ersättning?"
        description="Flyger du till USA? EU-reglerna gäller inte alltid. Lär dig skillnaden mellan SAS, United och Delta och när du har rätt till 600 €."
        url="https://lotproblem.pl/sv/blog/flyg-till-fran-usa-regler"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/sv/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-4 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Tillbaka till bloggen
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
              USA & Resor
            </span>
            <span className="text-gray-500 text-sm">6 mars 2025</span>
            <span className="text-gray-500 text-sm">• 6 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            USA-flyg: När har du rätt till 600 € i ersättning?
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Många tror att EU-reglerna inte gäller för resor till Amerika. Det är fel. Men det beror helt på VEM du flyger med och ÅT VILKET HÅLL du reser.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-purple-900 dark:text-purple-100 mb-2">
            Var ditt USA-flyg försenat?
          </h3>
          <p className="text-purple-800 dark:text-purple-200 mb-4">
            Ersättningen på långdistansflyg är nästan alltid 600 € (ca 6 800 kr). Det är värt att kolla upp.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=usa-flights" target="_blank" rel="nofollow noreferrer noopener">
              Kolla din ersättning
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Grundregeln: EU-bolag vs. Icke-EU-bolag</h2>
          <p>
            EU-förordning 261/2004 gäller beroende på flygbolagets hemland:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200 dark:bg-green-900/10 dark:border-green-800">
              <h3 className="font-bold text-green-700 flex items-center gap-2">
                <Plane className="w-5 h-5" /> Resa FRÅN Europa
              </h3>
              <p className="text-sm mt-2 font-semibold">ALLA flygbolag omfattas.</p>
              <ul className="list-disc pl-4 mt-2 text-sm">
                <li>SAS till New York: <strong>JA</strong></li>
                <li>Lufthansa till Chicago: <strong>JA</strong></li>
                <li>United till New York: <strong>JA</strong></li>
                <li>Delta till Atlanta: <strong>JA</strong></li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 dark:bg-yellow-900/10 dark:border-yellow-800">
              <h3 className="font-bold text-yellow-700 flex items-center gap-2">
                <Globe className="w-5 h-5" /> Resa TILL Europa
              </h3>
              <p className="text-sm mt-2 font-semibold">Endast EU-flygbolag omfattas!</p>
              <ul className="list-disc pl-4 mt-2 text-sm">
                <li>SAS från New York: <strong>JA</strong></li>
                <li>Lufthansa från Chicago: <strong>JA</strong></li>
                <li>United från New York: <span className="text-red-600 font-bold">NEJ</span></li>
                <li>Delta från Atlanta: <span className="text-red-600 font-bold">NEJ</span></li>
              </ul>
            </div>
          </div>

          <h2>Vad gäller för United, Delta och American Airlines?</h2>
          <p>
            Om du flyger hem från USA med ett amerikanskt bolag och flyget blir försenat, gäller inte EU-lagen. Du är utlämnad till amerikanska regler, som tyvärr är mycket sämre (oftast ingen kontantersättning, bara ombokning).
          </p>
          <p>
            <strong>Tips:</strong> Om du bokar en resa tur-och-retur, försök välja ett EU-bolag (SAS, Lufthansa, Air France, BA) för hemresan för att vara skyddad.
          </p>

          <h3>Mellanlandningar spelar roll</h3>
          <p>
            Om du flyger Stockholm &rarr; Frankfurt (Lufthansa) &rarr; New York (United), och det första Lufthansa-flyget är försenat så att du missar United-flyget?
            <br />
            <strong>JA!</strong> Eftersom resan startade i EU med ett EU-flyg (eller vilket flyg som helst från EU), har du rätt till ersättning för hela förseningen.
          </p>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Plane className="w-12 h-12 mx-auto text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Osäker på om ditt flyg täcks?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Vi kollar flygnummer och rutt åt dig. Det kostar inget att fråga.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=usa-flights" target="_blank" rel="nofollow noreferrer noopener">
              Beräkna ersättning
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
