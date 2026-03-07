import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, MapPin, Euro } from "lucide-react";
import Link from "next/link";

export default function LandvetterForsenatGuide() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hur länge måste flyget från Landvetter vara försenat för ersättning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "För att ha rätt till ekonomisk ersättning enligt EU261 måste du anlända till din slutdestination minst 3 timmar senare än den ursprungligen planerade ankomsttiden."
        }
      },
      {
        "@type": "Question",
        "name": "Hur mycket ersättning får jag vid försening från Göteborg Landvetter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ersättningen styrs av distansen: 250 € för flyg upp till 1 500 km (t.ex. Göteborg-London), 400 € för flyg mellan 1 500 och 3 500 km (t.ex. Göteborg-Alicante), och 600 € för flyg över 3 500 km (utanför EU)."
        }
      },
      {
        "@type": "Question",
        "name": "Vad ska jag göra medan jag väntar på Landvetter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Om förseningen överstiger 2 timmar har du rätt till mat och dryck. Spara alla kvitton. Begär även ett skriftligt intyg från flygbolagets markpersonal på Landvetter gällande förseningsorsaken."
        }
      },
      {
        "@type": "Question",
        "name": "Får jag ersättning om förseningen beror på dimma på Landvetter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tät dimma eller extremt väderlass räknas som 'extraordinära omständigheter'. I dessa fall utgår ingen ekonomisk kompensation, men flygbolaget måste fortfarande erbjuda ombokning samt mat och eventuellt hotell."
        }
      }
    ]
  };

  return (
    <LayoutSv>
      <SEO 
        title="Försenat eller inställt flyg på Landvetter (GOT) — Komplett guide"
        description="Har du drabbats av flygförsening eller inställt flyg på Göteborg Landvetter? Läs vår guide och kräv upp till 600 € i ersättning enligt EU261."
        image="/og-image.png"
        url="https://problemlot.com/sv/blog/landvetter-forsenat-installt-flyg-guide"
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
          <span>Landvetter (GOT) försening guide</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🇸🇪</span>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Göteborg Landvetter (GOT)
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Försening eller inställt flyg på Landvetter — Komplett guide för ersättning
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              12 min läsning
            </span>
            <span>•</span>
            <span>Uppdaterad: 7 mars 2025</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Göteborg Landvetter (GOT) är Sveriges näst största flygplats och den viktigaste knutpunkten för resenärer i Västsverige. Tyvärr är förseningar och inställda flyg en del av vardagen, oavsett om du reser på affärsresa till Frankfurt eller semester till Gran Canaria. Enligt EU-lagstiftning har du starka rättigheter som kan ge dig upp till <strong>600 € i ersättning</strong> vid störningar från Landvetter.
          </p>
        </div>

        <Card className="p-8 mb-12 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Fast på Landvetter?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Låt inte flygbolaget komma undan. Kontrollera dina rättigheter gratis på 3 minuter och kräv din EU-ersättning.
              </p>
            </div>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg whitespace-nowrap">
              <Link href="https://claimwinger.com/sv/forsenat-flyg">
                Kontrollera ersättning gratis →
              </Link>
            </Button>
          </div>
        </Card>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Vad innebär EU-förordning 261/2004 för flyg från Landvetter?
          </h2>
          <p>
            Eftersom Göteborg Landvetter ligger i Sverige (och därmed EU), omfattas <strong>alla flygningar som avgår härifrån</strong> av <Link href="https://claimwinger.com/sv" className="text-blue-600 hover:underline">EU261-direktivet</Link>. Det spelar ingen roll om du flyger med SAS, Ryanair eller Turkish Airlines – regelverket gäller.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            Dina tre huvudrättigheter:
          </h3>
          
          <div className="space-y-6 my-8">
            <Card className="p-6 border-l-4 border-blue-600">
              <h4 className="font-bold text-lg mb-2">1. Ekonomisk ersättning (Skadestånd)</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Om du anländer till din slutdestination mer än 3 timmar för sent, eller om flyget ställs in med mindre än 14 dagars varsel, har du rätt till mellan <strong>250 € och 600 €</strong>. Detta gäller så länge förseningen inte orsakats av extraordinära omständigheter (som extremt väder eller flygledarstrejk).
              </p>
            </Card>
            <Card className="p-6 border-l-4 border-green-600">
              <h4 className="font-bold text-lg mb-2">2. Rätt till omvårdnad på flygplatsen</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Sitter du fast på Landvetter? Om förseningen överstiger 2-4 timmar (beroende på resans längd) måste flygbolaget stå för mat, dryck och två telefonsamtal/e-postmeddelanden. Måste du stanna över natten? Då ska de betala hotell och transport.
              </p>
            </Card>
            <Card className="p-6 border-l-4 border-yellow-600">
              <h4 className="font-bold text-lg mb-2">3. Återbetalning eller ombokning</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Är flyget inställt? Du får välja mellan att få pengarna tillbaka för biljetten (inom 7 dagar) ELLER att bli ombokad till din destination vid första bästa tillfälle (även med ett annat flygbolag).
              </p>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Ersättningsnivåer från Göteborg
          </h2>
          <p>
            Så här mycket pengar har du rätt till baserat på flygsträcka, direkt från Landvetter:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li><strong>250 €</strong> för flyg upp till 1 500 km (t.ex. Göteborg - London, Paris, Berlin, Amsterdam).</li>
            <li><strong>400 €</strong> för flyg mellan 1 500 km och 3 500 km (t.ex. Göteborg - Malaga, Rom, Istanbul).</li>
            <li><strong>600 €</strong> för flyg över 3 500 km (t.ex. Göteborg - Dubai, om du flyger utanför EU).</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Vad ska du göra på Landvetter vid en försening?
          </h2>
          <p>
            Agera smart redan på flygplatsen för att säkra din ersättning:
          </p>
          <ol className="list-decimal pl-6 space-y-4 mb-8">
            <li><strong>Spara boardingkortet:</strong> Kasta aldrig ditt fysiska eller digitala boardingkort. Det är ditt viktigaste bevis.</li>
            <li><strong>Fråga varför:</strong> Gå till handling-personalen (Menzies, Aviator etc.) och kräv ett skriftligt intyg på varför flyget är försenat.</li>
            <li><strong>Fota skärmarna:</strong> Ta bilder av avgångstavlorna på Landvetter som bevisar att flyget är försenat eller inställt.</li>
            <li><strong>Spara kvitton:</strong> Om du köper kaffe eller mat på Landvetter, spara kvittot.</li>
          </ol>
        </div>

        <Card className="p-8 my-12 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Vill du ha professionell hjälp?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Flygbolagen försöker ofta slingra sig. ClaimWinger hanterar pappersarbetet och hotar med rättsliga åtgärder om de inte betalar frivilligt.
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
              <Link href="https://claimwinger.com/sv">
                Få Min Ersättning Tryggt →
              </Link>
            </Button>
          </div>
        </Card>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Vanliga frågor om förseningar på Landvetter
          </h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {faq.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {faq.acceptedAnswer.text}
                </p>
              </Card>
            ))}
          </div>
        </section>
      </article>
    </LayoutSv>
  );
}