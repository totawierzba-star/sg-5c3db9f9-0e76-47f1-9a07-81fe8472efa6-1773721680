import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, Globe, Euro } from "lucide-react";
import Link from "next/link";

export default function TransatlantiskaFlygErsattning() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hur många timmars försening krävs för 600 € på USA-flyg?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "För flygningar över 3 500 km (alla transatlantiska flyg) har du rätt till 600 € om du anländer minst 4 timmar försenat till slutdestinationen. Om förseningen är mellan 3 och 4 timmar kan flygbolaget halvera beloppet till 300 €."
        }
      },
      {
        "@type": "Question",
        "name": "Får jag ersättning från Delta Airlines vid försening från Arlanda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja. Alla flyg som lyfter från en EU-flygplats omfattas av EU-lagstiftningen, oavsett vilket flygbolag du åker med. Du kan alltså kräva EU-kompensation (upp till 600 €) från Delta eller United Airlines för utresan."
        }
      },
      {
        "@type": "Question",
        "name": "Jag var försenad på hemresan från USA till Sverige med United. Har jag rätt till EU-ersättning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nej. Eftersom flygningen startar utanför EU och flygbolaget (United) inte är ett EU-bolag, gäller inte EU261. Hade du däremot flugit med ett EU-bolag (som SAS eller Lufthansa) hade lagstiftningen gällt."
        }
      }
    ]
  };

  return (
    <LayoutSv>
      <SEO 
        title="Transatlantiska flyg från Sverige — Så Kräver du 600 €"
        description="Försenad till USA eller Asien? Läs hur EU-förordning 261 ger dig rätt till maximal kompensation (600 €) vid störningar på långdistansflyg från Sverige."
        image="/og-image.png"
        url="https://problemlot.com/sv/blog/transatlantiska-flyg-sverige-600-euro"
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
          <span>Långdistans & USA-flyg</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🌎</span>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Transatlantiska rutter
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Transatlantiska flyg från Sverige — Hur du kräver 600 € maximalt
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
            Att flyga interkontinentalt, till exempel från Arlanda till New York, Chicago eller Miami, innebär ofta byten och risk för stora förseningar. En trasig motor på ett stort flygplan ställer snabbt till med kaos. Tack vare <Link href="https://claimwinger.com/sv" className="text-blue-600 hover:underline">den europeiska passagerarlagen (EU261)</Link> är ditt skydd otroligt starkt, och rätten till den högsta ersättningsnivån – <strong>600 € per passagerare</strong> – är ofta tydlig.
          </p>
        </div>

        <Card className="p-8 mb-12 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Blev USA-resan försenad?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Se till att få de pengar lagstiftningen ger dig rätt till. 600 € per familjemedlem kan finansiera en helt ny resa. Kolla ditt flyg på 3 minuter.
              </p>
            </div>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg whitespace-nowrap">
              <Link href="https://claimwinger.com/sv/forsenat-flyg">
                Kontrollera Förseningen →
              </Link>
            </Button>
          </div>
        </Card>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Förstå avståndsregeln över Atlanten
          </h2>
          <p>
            EU-lagstiftningen delar in flygresor i avstånds-kategorier. För alla flygningar över 3 500 km (som automatiskt innefattar alla transatlantiska och asiatiska rutter) är maxbeloppet som flygbolaget kan tvingas betala 600 €.
          </p>
          <Card className="p-6 my-6 border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-950/30">
            <h3 className="font-bold text-lg mb-2">Viktigt om tidsgränsen: 3 vs 4 timmar</h3>
            <p className="text-gray-700 dark:text-gray-300">
              För kortare flygningar inom EU får du full ersättning efter 3 timmars försening. För transatlantiska långflyg har bolagen rätten att <strong>halvera ersättningen (till 300 €)</strong> om förseningen vid slutdestinationen är mellan 3 och 4 timmar. Är du försenad med 4 timmar och 1 minut kräver du hela 600 €.
            </p>
          </Card>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Anslutningar i USA och Europa
          </h2>
          <p>
            De flesta reser med anslutning, t.ex. från Stockholm via Frankfurt (med Lufthansa) eller Amsterdam (med KLM) över till USA, eller vidare inrikes i USA med Delta eller United Airlines.
          </p>
          <ul className="list-disc pl-6 space-y-4 mb-8">
            <li><strong>Missad anslutning i Europa:</strong> Om förseningen sker redan på Arlanda så att du missar flyget i Frankfurt och därmed kommer fram till USA med mer än 4 timmars försening, har du rätt till 600 € från det bolag som orsakade första förseningen.</li>
            <li><strong>Missad anslutning i USA:</strong> Om flyget från EU över Atlanten är försenat så du missar din inrikesanslutning i USA (på samma PNR-biljett), baseras ersättningen på när du anländer till din sista destination. Är den över 4 timmar, får du 600 €.</li>
          </ul>
        </div>

        <Card className="p-8 my-12 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Stora bolag anlitar dyra advokater. Gör du?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Långdistansbolag gör allt de kan för att skylla på "väder i USA" och därmed undvika miljonutbetalningar. Vi analyserar radardata och tar upp juridisk strid utan att du behöver ta någon ekonomisk risk.
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
              <Link href="https://claimwinger.com/sv">
                Hämta Mina Pengar Säkert →
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