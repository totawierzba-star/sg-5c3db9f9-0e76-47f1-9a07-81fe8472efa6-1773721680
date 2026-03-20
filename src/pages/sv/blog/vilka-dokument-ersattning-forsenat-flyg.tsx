import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, HelpCircle, FileText, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function VilkaDokumentErsattning() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Vilka dokument behöver jag för att ansöka om ersättning för försenat flyg?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Det absolut viktigaste är ditt bokningsnummer (PNR - oftast 6 tecken). Dessutom bör du ha en kopia av e-biljetten, och gärna ditt boardingkort (digitalt eller utskrivet) samt ID-handling (pass/körkort) för identifikation."
        }
      },
      {
        "@type": "Question",
        "name": "Kan jag få ersättning om jag har tappat bort boardingkortet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja. Även om boardingkortet är ett starkt bevis, räcker det enligt EU-domstolen ofta med att du har en bekräftad bokning (via mejl) och ditt bokningsnummer (PNR) för att styrka att du var inbokad på flighten."
        }
      },
      {
        "@type": "Question",
        "name": "Måste jag spara kvitton för extra utgifter under förseningen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, om du vill få pengar tillbaka för hotell, mat, dryck och transfer som du tvingades betala under väntetiden. Detta kallas 'Rätt till omvårdnad' och är separat från själva klumpsummeersättningen. Spara ALLA kvitton."
        }
      }
    ]
  };

  return (
    <LayoutSv>
      <SEO 
        title="Vilka dokument krävs för att ansöka om flygersättning? | Guide"
        description="Läs vår checklista: PNR, bokningsnummer, boardingkort och kvitton. Så förbereder du din ansökan för att få upp till 600 €."
        image="/og-image.png"
        url="https://problemlot.com/sv/blog/vilka-dokument-ersattning-forsenat-flyg"
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
          <span>Dokument ersättning försenat flyg</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Vilka dokument behöver jag för att ansöka om ersättning för försenat flyg?
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 4 min läsning</span>
            <span>•</span>
            <span className="text-blue-600 font-semibold">Checklista</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl text-gray-700 dark:text-gray-300 font-medium bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border-l-4 border-blue-600">
            <strong>Snabbt svar:</strong> Din <strong>bokningsbekräftelse med bokningsnummer (PNR)</strong> är det allra viktigaste. Har du detta i din inkorg kan du oftast få din EU261-kompensation (upp till 600 €). Spara även alltid boardingkort och eventuella kvitton för matköp.
          </p>
        </div>

        {/* CTA 1 */}
        <Card className="p-8 mb-12 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 border-blue-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Har du ditt bokningsnummer redo?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Skriv in det i vår kalkylator så kollar vi om du har rätt till hundratals euro för förseningen.
              </p>
            </div>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg w-full md:w-auto">
              <Link href="https://claimwinger.com/sv/forsenat-flyg">
                Påbörja kravprocessen direkt →
              </Link>
            </Button>
          </div>
        </Card>

        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold mt-8 mb-4">Checklista för dokument</h2>
          <p>
            Flygbolagen älskar byråkrati. Genom att kräva många dokument hoppas de att resenärer ska tröttna. För att stoppa den strategin bör du ha följande redo:
          </p>

          <ul className="space-y-4 list-none pl-0">
            <li className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
              <span><strong>E-biljetten / Bokningsbekräftelsen:</strong> Denna fick du på mejl när du betalade resan. Den innehåller PNR (Passenger Name Record) som oftast är 6 tecken långt, t.ex. "XJ9Q2Z".</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
              <span><strong>Boardingkort (Frivilligt men rekommenderat):</strong> Digitalt i appen eller den lilla papperslappen du fick vid disken. Ta en skärmdump innan det försvinner ur appen!</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
              <span><strong>Kopia på pass / ID:</strong> Behövs alltid när utbetalningar ska ske, för att motverka bedrägerier.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
              <span><strong>Kvitton från flygplatsen:</strong> Mat, hotellnatt eller taxi som du tvingades betala under förseningen kan ofta fås tillbaka som "rätt till omvårdnad" – men INGA kontoutdrag godkänns, du MÅSTE ha det faktiska kvittot.</span>
            </li>
          </ul>
        </div>

        {/* CTA 2 (Przed FAQ) */}
        <div className="bg-blue-50 dark:bg-blue-950/30 p-8 rounded-2xl text-center mb-12 border border-blue-100 dark:border-blue-900">
          <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Ladda upp dina dokument</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Vårt system är säkert och det tar under minuten att ladda upp bokningsbekräftelsen. Resten sköter våra jurister.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            <Link href="https://claimwinger.com/sv/forsenat-flyg">
              Ansök om förseningsersättning
            </Link>
          </Button>
        </div>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <HelpCircle className="w-8 h-8 text-blue-500" />
            Vanliga frågor (FAQ)
          </h2>
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Vilka dokument behöver jag för att ansöka om ersättning för försenat flyg?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Du behöver främst din bokningsbekräftelse med det 6-siffriga bokningsnumret (PNR) och en kopia av ditt ID/pass.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Kan jag få ersättning om jag har tappat bort boardingkortet?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Ja, EU-domstolen har slagit fast att boardingkort inte är ett strikt krav så länge du kan bevisa att du hade en bekräftad bokning (via mejl eller kvitto).
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Måste jag spara kvitton för extra utgifter under förseningen?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Ja. Om du vill ha pengar tillbaka för ofrivilliga hotellnätter eller matköp på terminalen är det endast det riktiga pappers- eller PDF-kvittot som godkänns av flygbolagen.
              </p>
            </Card>
          </div>
        </section>
      </article>
    </LayoutSv>
  );
}
