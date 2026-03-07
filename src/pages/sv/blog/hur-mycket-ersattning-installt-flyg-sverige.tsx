import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, Plane, HelpCircle, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function HurMycketErsattningInstalltFlyg() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hur mycket ersättning får jag för ett inställt flyg i Sverige?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "För ett inställt flyg till eller från Sverige får du en standardiserad klumpsumma på antingen 250 €, 400 € eller 600 €. Summan avgörs av flygsträckans längd, förutsatt att du blev informerad om avbokningen mindre än 14 dagar före avgång."
        }
      },
      {
        "@type": "Question",
        "name": "Får jag både biljettåterbetalning och ersättning vid inställt flyg?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, ofta. Om ditt flyg ställs in och du väljer att inte resa vidare med en ombokning, har du rätt att få hela biljettpriset återbetalt. Utöver detta har du rätt till kompensationsbeloppet (250-600 €) om flyget ställdes in med kort varsel på grund av bolagets fel."
        }
      },
      {
        "@type": "Question",
        "name": "Spelar biljettens pris någon roll för ersättningen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nej. Enligt EU-förordning 261/2004 är ersättningsnivåerna (250, 400, 600 euro) fasta och oberoende av vad din flygbiljett kostade. Du kan alltså få en ersättning som är högre än själva biljettpriset."
        }
      }
    ]
  };

  return (
    <LayoutSv>
      <SEO 
        title="Hur mycket ersättning får jag för ett inställt flyg i Sverige?"
        description="Få reda på exakt hur mycket pengar (upp till 600 €) du har rätt till om ditt flyg från eller till Sverige ställs in. Snabbguide till EU261."
        image="/og-image.png"
        url="https://problemlot.com/sv/blog/hur-mycket-ersattning-installt-flyg-sverige"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          <Link href="/sv" className="hover:text-blue-600">Hem</Link>
          <span className="mx-2">/</span>
          <Link href="/sv/blog" className="hover:text-blue-600">Blogg</Link>
          <span className="mx-2">/</span>
          <span>Ersättning inställt flyg Sverige</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Hur mycket ersättning får jag för ett inställt flyg i Sverige?
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 4 min läsning</span>
            <span>•</span>
            <span className="text-green-600 font-semibold">✓ Faktagranskad 2025</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl text-gray-700 dark:text-gray-300 font-medium bg-red-50 dark:bg-red-950 p-6 rounded-lg border-l-4 border-red-600">
            <strong>Snabbt svar:</strong> Blir ditt flyg inställt i Sverige (eller till Sverige med ett EU-bolag) har du enligt EU261 rätt till ett skadestånd på <strong>250 € (upp till 1500 km)</strong>, <strong>400 € (1500-3500 km)</strong>, eller <strong>600 € (över 3500 km)</strong>. Kravet är att du fick veta om avbokningen mindre än 14 dagar före resan.
          </p>
        </div>

        {/* CTA 1 */}
        <Card className="p-8 mb-12 bg-gradient-to-br from-red-50 to-orange-100 dark:from-red-950 dark:to-orange-900 border-red-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Ställdes ditt flyg in?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Få upp till 600 € i plåster på såren. Kontrollera ditt flyg kostnadsfritt på ett par klick!
              </p>
            </div>
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg w-full md:w-auto">
              <Link href="https://claimwinger.com/sv/installat-flyg">
                Starta din ansökan →
              </Link>
            </Button>
          </div>
        </Card>

        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold mt-8 mb-4">Återbetalning vs Kompensation</h2>
          <p>
            Många resenärer blandar ihop <em>biljettåterbetalning</em> och <em>kompensation</em>. Det är två helt olika saker, och du kan ofta få båda två!
          </p>
          <ul>
            <li><strong>Återbetalning av biljetten:</strong> Om flyget ställs in ska du erbjudas ett alternativt flyg, ELLER pengarna tillbaka för biljetten. Detta är ditt konsumentskydd.</li>
            <li><strong>Kompensation (Ersättning):</strong> Om avbokningen sker nära inpå avresa (inom 14 dagar) och beror på bolaget självt, ska de betala en "straffavgift" till dig på 250 - 600 €.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-6 mb-3">Viktig regel om ombokning</h3>
          <p>
            Om flygbolaget erbjuder en ombokning som tar dig till din destination med ungefär samma tidtabell som den ursprungliga (marginalerna är små och styrs av exakt hur många dagar innan du fick informationen), kan ersättningen halveras med 50%.
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg my-6 flex gap-4">
            <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0" />
            <p className="m-0 text-sm">
              Spara alla kvitton! Om ditt flyg ställs in och du tvingas betala för hotell, mat eller taxi på flygplatsen i väntan på ett nytt flyg, är flygbolaget skyldigt att ersätta även dessa kostnader utöver kompensationsbeloppet.
            </p>
          </div>
        </div>

        {/* CTA 2 (Przed FAQ) */}
        <div className="bg-blue-50 dark:bg-blue-950/30 p-8 rounded-2xl text-center mb-12 border border-blue-100 dark:border-blue-900">
          <Plane className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Maximera din utdelning</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Gå inte miste om de pengar du har laglig rätt till. Låt experter driva kravet mot flygbolaget. Du betalar ingenting om vi inte vinner fallet åt dig.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            <Link href="https://claimwinger.com/sv/installat-flyg">
              Säkra dina 600 € idag
            </Link>
          </Button>
        </div>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <HelpCircle className="w-8 h-8 text-red-600" />
            Vanliga frågor (FAQ)
          </h2>
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Hur mycket ersättning får jag för ett inställt flyg i Sverige?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Du får 250 €, 400 € eller 600 € beroende på resans totala sträcka. Förutsättningen är att du inte informerades om det inställda flyget senast 14 dagar i förväg.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Får jag både biljettåterbetalning och ersättning vid inställt flyg?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Ja, om du väljer att inte boka om flyget utan istället vill ha pengarna tillbaka, har du ändå rätt att dessutom kräva EU-kompensationen (250-600 €) för besväret.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Spelar biljettens pris någon roll för ersättningen?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nej. Kompensationen är fast och beror inte på hur dyr eller billig din flygbiljett var. Du kan få 600 € även om din Ryan-biljett bara kostade 30 €.
              </p>
            </Card>
          </div>
        </section>
      </article>
    </LayoutSv>
  );
}