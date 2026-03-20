import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, MapPin, Clock, Euro } from "lucide-react";
import Link from "next/link";

export default function MalmoAirportForsening() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hur mycket ersättning får jag vid en flygförsening från Malmö Airport?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Beloppet beror på resans längd. Eftersom de flesta flyg från Malmö (inrikes eller till Östeuropa/Balkan med Wizz Air) är kortare än 1 500 km, har du oftast rätt till 250 €. Ankommer du mer än 3 timmar försent har du rätt till denna ersättning, förutsatt att det inte rör sig om extraordinära omständigheter."
        }
      },
      {
        "@type": "Question",
        "name": "Gäller EU261 även för inrikesflyg från Malmö till Stockholm?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, EU-förordning 261/2004 gäller för alla kommersiella passagerarflyg inom EU, inklusive inrikesflyg i Sverige. Blir ditt flyg med SAS eller BRA inställt eller försenat med mer än 3 timmar till Bromma/Arlanda, har du rätt till 250 €."
        }
      },
      {
        "@type": "Question",
        "name": "Vad gör jag om Wizz Air ställer in mitt flyg från Sturup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Om Wizz Air ställer in din flygning med mindre än 14 dagars varsel ska de erbjuda dig valet mellan ombokning till slutdestinationen ELLER återbetalning av biljetten. Utöver detta har du rätt till upp till 400 € i kontant kompensation (acceptera inte Wizz-credits)."
        }
      }
    ]
  };

  return (
    <LayoutSv>
      <SEO 
        title="Försening eller inställt flyg på Malmö Airport (MMX) — Guide"
        description="Fast på Malmö Sturup? Oavsett om du flyger inrikes eller utomlands. Se hur du kräver kompensation upp till 600 € enligt EU261."
        image="/og-image.png"
        url="https://problemlot.com/sv/blog/malmo-airport-forsening-ersattning"
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
          <span>Malmö (MMX) försening</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🇸🇪</span>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Malmö Airport (Sturup)
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Försenat eller inställt flyg från Malmö Airport (MMX)? Så kräver du ersättning
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              9 min läsning
            </span>
            <span>•</span>
            <span>Uppdaterad: 7 mars 2025</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Malmö Airport, tidigare kallad Sturup, är Sydsveriges största inrikesflygplats och en viktig hub för lågprisbolaget Wizz Air. Oavsett om du pendlar till Stockholm eller är på väg ut i Europa, täcks alla avgångar från Malmö av europeisk lagstiftning. Det betyder att du vid förseningar över 3 timmar kan kräva upp till <strong>600 € i kontant ersättning</strong>.
          </p>
        </div>

        <Card className="p-8 mb-12 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Fast på Sturup?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Säkerställ att du får dina pengar. ClaimWinger hjälper passagerare från Malmö Airport att få sin rättmätiga EU261-kompensation.
              </p>
            </div>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg whitespace-nowrap">
              <Link href="https://claimwinger.com/sv">
                Få Din Ersättning Prövad Gratis →
              </Link>
            </Button>
          </div>
        </Card>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Rättigheter för inrikesflyg (t.ex. till Arlanda/Bromma)
          </h2>
          <p>
            Ett vanligt missförstånd är att EU-lagarna bara gäller för internationella resor. Fel. Om ditt flyg mellan Malmö och Stockholm (med t.ex. SAS eller BRA) är mer än 3 timmar försenat vid ankomst, <strong>har du rätt till 250 € i ersättning</strong>. 
          </p>
          <ul className="space-y-2 mb-8">
            <li>✔️ <strong>Matkuponger:</strong> Redan efter 2 timmars väntan måste personalen på MMX ge dig mat och dryck.</li>
            <li>✔️ <strong>Ombokning:</strong> Blir inrikesflyget inställt ska de boka om dig till nästa tillgängliga flyg, och du har fortfarande rätt till 250 € i kompensation.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Problem med Wizz Air från Malmö
          </h2>
          <p>
            Wizz Air flyger många rutter från Malmö Airport till Öst- och Centraleuropa (t.ex. till Polen, Rumänien, Balkan). De är kända för att vara notoriskt svåra att kontakta när något går snett.
          </p>
          <Card className="p-6 my-6 border-l-4 border-red-600">
            <h3 className="font-bold text-lg mb-2">Viktigt om Wizz Air-ersättning:</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Lågprisbolaget kommer ofta erbjuda "Wizz Credits" (120% av din biljettkostnad) som plåster på såren. <strong>Acceptera inte detta.</strong> EU-förordningen säger att du har rätt till riktiga kontanter (mellan 250 € och 400 € beroende på rutt), förutom återbetalning eller ombokning. Genom att godkänna poäng i appen kan du avsäga dig rätten till din lagstadgade ekonomiska ersättning.
            </p>
          </Card>
        </div>

        <Card className="p-8 my-12 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Låt proffsen driva ditt ärende
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Att bråka med Wizz Air eller SAS kan ta månader. ClaimWinger hanterar det juridiska arbetet åt dig och vi tar bara betalt om vi lyckas få loss dina pengar.
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
              <Link href="https://claimwinger.com/sv">
                Hämta min ersättning →
              </Link>
            </Button>
          </div>
        </Card>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Vanliga frågor (FAQ)
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
