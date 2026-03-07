import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, Plane, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function HurMycketErsattningSasFlyg() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hur mycket ersättning får jag för ett försenat SAS-flyg?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ersättningen för ett försenat SAS-flyg är 250 €, 400 € eller 600 €. Beloppet beror helt på flygsträckans längd: 250 € för flyg under 1 500 km, 400 € för flyg mellan 1 500 och 3 500 km, och 600 € för flyg över 3 500 km. Kravet är att du är minst 3 timmar försenad till din slutdestination."
        }
      },
      {
        "@type": "Question",
        "name": "När betalar SAS ut ersättning för försening?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SAS är skyldiga att betala ut ersättning enligt EU261 när förseningen beror på omständigheter de själva kan kontrollera, såsom tekniska fel på flygplanet eller personalbrist. Om förseningen beror på extrema väderförhållanden eller flygledningsstrejk (extraordinära omständigheter) utgår ingen ersättning."
        }
      },
      {
        "@type": "Question",
        "name": "Måste jag acceptera en värdecheck från SAS istället för kontanter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nej. Enligt lag har du rätt till kontant utbetalning (pengar in på bankkontot). Flygbolag som SAS kan erbjuda värdecheckar (vouchers), men du behöver inte acceptera dem om du hellre vill ha pengar."
        }
      }
    ]
  };

  return (
    <LayoutSv>
      <SEO 
        title="Hur mycket ersättning får jag för ett försenat SAS-flyg? | 2025"
        description="Snabbt svar: Du kan få 250 €, 400 € eller 600 € för ett försenat SAS-flyg beroende på distans. Läs vår guide och kräv din rättmätiga flygersättning."
        image="/og-image.png"
        url="https://problemlot.com/sv/blog/hur-mycket-ersattning-forsenat-sas-flyg"
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
          <span>Hur mycket ersättning SAS försening</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Hur mycket ersättning får jag för ett försenat SAS-flyg?
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 4 min läsning</span>
            <span>•</span>
            <span className="text-green-600 font-semibold">✓ Faktagranskad EU261</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl text-gray-700 dark:text-gray-300 font-medium bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border-l-4 border-blue-600">
            <strong>Kort svar:</strong> För ett försenat SAS-flyg har du rätt till <strong>250 €</strong> (korta flyg), <strong>400 €</strong> (mellanlånga flyg) eller <strong>600 €</strong> (långdistansflyg). Det avgörande är att du anländer till din slutdestination minst 3 timmar försenad, och att förseningen orsakats av flygbolaget (t.ex. tekniska problem).
          </p>
        </div>

        {/* CTA 1 */}
        <Card className="p-8 mb-12 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Har du drabbats av en försening med SAS?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Kontrollera omedelbart hur mycket pengar du har rätt till. Processen tar 2 minuter och är helt riskfri.
              </p>
            </div>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg w-full md:w-auto">
              <Link href="https://claimwinger.com/sv/forsenat-flyg">
                Kolla din ersättning →
              </Link>
            </Button>
          </div>
        </Card>

        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold mt-8 mb-4">Ersättningsnivåer hos SAS enligt EU-lag</h2>
          <p>
            Eftersom SAS är ett europeiskt flygbolag omfattas alla deras flygningar globalt av <strong>EU-förordning 261/2004</strong>. Biljettpriset spelar ingen roll för din ersättning. Det är enbart flygsträckan som räknas:
          </p>
          <ul>
            <li><strong>250 Euro:</strong> Flygningar upp till 1 500 km (t.ex. Stockholm till Köpenhamn).</li>
            <li><strong>400 Euro:</strong> Alla flygningar inom EU över 1 500 km, samt övriga flyg mellan 1 500 och 3 500 km (t.ex. Stockholm till Rom eller Alicante).</li>
            <li><strong>600 Euro:</strong> Flygningar utanför EU som är längre än 3 500 km (t.ex. Stockholm till New York eller Tokyo).</li>
          </ul>

          <h2 className="text-3xl font-bold mt-8 mb-4">När slipper SAS betala?</h2>
          <p>
            För att du ska få pengarna krävs det att förseningen ligger inom SAS kontroll. Exempel på när de <strong>måste betala</strong> är: tekniska fel på planet, personalbrist, eller försenad ankomst av inkommande flyg.
          </p>
          <p>
            De situationer där de <strong>inte behöver betala</strong> kallas <em>extraordinära omständigheter</em>, vilket inkluderar extrema snöstormar, sabotage eller strejk från flygplatspersonal (ej SAS egen personal).
          </p>
        </div>

        {/* CTA 2 (Przed FAQ) */}
        <div className="bg-green-50 dark:bg-green-950/30 p-8 rounded-2xl text-center mb-12 border border-green-100 dark:border-green-900">
          <Plane className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Låt proffsen hantera SAS åt dig</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            SAS kan ibland krångla och hänvisa till ogiltiga ursäkter. ClaimWinger vet exakt hur man tvingar igenom ditt krav enligt lagen.
          </p>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
            <Link href="https://claimwinger.com/sv/forsenat-flyg">
              Ansök om upp till 600 € nu
            </Link>
          </Button>
        </div>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <HelpCircle className="w-8 h-8 text-blue-600" />
            Vanliga frågor (FAQ)
          </h2>
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Hur mycket ersättning får jag för ett försenat SAS-flyg?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Du kan få 250 €, 400 € eller 600 € beroende på resans avstånd. Grundkravet är att du nådde din slutdestination med minst 3 timmars försening.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">När betalar SAS ut ersättning för försening?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                SAS är skyldiga att betala ut ersättning när förseningen beror på omständigheter de själva kan kontrollera, som tekniska fel eller planering. De betalar inte vid extrema väderförhållanden.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Måste jag acceptera en värdecheck från SAS istället för kontanter?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nej. Enligt lag har du rätt till kontant utbetalning (pengar in på bankkontot). Du behöver inte acceptera en SAS-voucher om du inte vill.
              </p>
            </Card>
          </div>
        </section>

      </article>
    </LayoutSv>
  );
}