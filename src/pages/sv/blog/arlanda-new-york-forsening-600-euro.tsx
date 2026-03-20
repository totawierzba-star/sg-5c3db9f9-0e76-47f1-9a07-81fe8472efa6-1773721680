import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, AlertCircle, Clock, Globe } from "lucide-react";
import Link from "next/link";

export default function ArlandaNewYorkForsening() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hur mycket kan jag få i ersättning för försenat flyg till New York?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eftersom flygsträckan mellan Stockholm Arlanda och New York (JFK/EWR) är över 3 500 km, har du rätt till den maximala ersättningen enligt EU261, vilket är 600 € per passagerare. Villkoret är att flyget ankommer minst 3 timmar försenat till New York eller om flyget ställs in."
        }
      },
      {
        "@type": "Question",
        "name": "Gäller EU261 om jag flyger med ett amerikanskt flygbolag (t.ex. Delta eller United)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JA! När du reser FRÅN en flygplats i EU (som Stockholm Arlanda), gäller EU261 för ALLA flygbolag, oavsett var de är registrerade. Om du däremot reser FRÅN New York TILL Arlanda med ett icke-EU-flygbolag gäller inte EU261. Men reser du hem med SAS (som är ett EU-flygbolag) gäller EU261 även från USA."
        }
      },
      {
        "@type": "Question",
        "name": "Vad händer om flyget är försenat på grund av stormar över Atlanten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Extrema väderförhållanden som atlantstormar kan klassificeras som 'extraordinära omständigheter', vilket innebär att ingen ersättning på 600 € utgår. Flygbolaget måste dock bevisa detta. Om förseningen däremot beror på tekniskt fel på planet, har du full rätt till 600 €."
        }
      },
      {
        "@type": "Question",
        "name": "Jag missade min inrikesanslutning i USA på grund av försening från Arlanda, får jag mer pengar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nej, maxersättningen är fortfarande 600 € för hela resan. Men om du missade din anslutning (på samma bokning) i t.ex. New York och därför blev mer än 3 timmar försenad till din slutdestination (t.ex. Florida), har du rätt till 600 € baserat på den totala förseningen."
        }
      }
    ]
  };

  return (
    <LayoutSv>
      <SEO 
        title="Arlanda till New York försenat? Få 600 € (Krav och Guide)"
        description="Har ditt flyg från Stockholm Arlanda (ARN) till New York (EWR/JFK) blivit försenat? Lär dig hur du säkrar 600 € ersättning enligt EU261."
        image="/og-image.png"
        url="https://problemlot.com/sv/blog/arlanda-new-york-forsening-600-euro"
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
          <span>Arlanda – New York försening</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🗽</span>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Transatlantiska flygningar
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Försenat flyg från Arlanda till New York — Så kräver du 600 € i ersättning
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              11 min läsning
            </span>
            <span>•</span>
            <span>Uppdaterad: 7 mars 2025</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Att flyga mellan <strong>Stockholm Arlanda (ARN)</strong> och <strong>New York (JFK/EWR)</strong> är en av Sveriges mest populära långdistansrutter. Men när det över 8 timmar långa flyget drabbas av förseningar eller ställs in, kan det förstöra både semestern och viktiga affärsmöten. Den goda nyheten? Enligt europeisk lagstiftning har du rätt till maxersättningen på <strong>600 € (ca 6 800 kr)</strong>.
          </p>
        </div>

        <Card className="p-8 mb-12 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Försenad till USA?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Kolla snabbt om du har rätt till 600 €. ClaimWinger hjälper dig kostnadsfritt att driva in pengarna från flygbolaget.
              </p>
            </div>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg whitespace-nowrap">
              <Link href="https://claimwinger.com/sv">
                Få 600 € nu →
              </Link>
            </Button>
          </div>
        </Card>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            EU261-reglerna för flygningar till USA
          </h2>
          <p>
            Eftersom sträckan Stockholm – New York är drygt 6 300 kilometer, hamnar rutten i den högsta ersättningskategorin enligt <Link href="https://claimwinger.com/sv/forsenat-flyg" className="text-blue-600 hover:underline">EU-förordning 261/2004</Link>. För flygningar över 3 500 km gäller följande ersättningsnivåer:
          </p>
          <ul className="space-y-2 mt-4 mb-8">
            <li>• Försening mellan 3 och 4 timmar: Möjlighet att flygbolaget halverar ersättningen till 300 €.</li>
            <li>• <strong>Försening över 4 timmar: Full ersättning på 600 €.</strong></li>
            <li>• Inställt flyg med kort varsel: 600 €.</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            Spelar det roll vilket flygbolag jag flyger med?
          </h3>
          <p>
            Ja, flygbolagets nationalitet har enorm betydelse när du flyger över Atlanten:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <Card className="p-6 bg-green-50 dark:bg-green-950 border-green-200">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <Globe className="text-green-600 w-5 h-5"/>
                Från Stockholm (ARN) till USA
              </h4>
              <p className="text-sm">
                När du reser <strong>FRÅN Sverige</strong> gäller EU261 <strong>alltid</strong>. Oavsett om du flyger med SAS (EU-bolag) eller United/Delta Airlines (icke-EU). Du är skyddad av europeisk lag.
              </p>
            </Card>
            <Card className="p-6 bg-yellow-50 dark:bg-yellow-950 border-yellow-200">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <Globe className="text-yellow-600 w-5 h-5"/>
                Från USA till Stockholm (ARN)
              </h4>
              <p className="text-sm">
                När du reser hem <strong>TILL Sverige</strong> från USA gäller EU261 <strong>ENDAST</strong> om du flyger med ett europeiskt flygbolag (t.ex. SAS, Lufthansa, KLM). Flyger du med Delta eller United har du inte rätt till EU-ersättning.
              </p>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Vanliga orsaker till förseningar (Arlanda - New York)
          </h2>
          <p>
            Flygbolag kommer ofta försöka hävda "extraordinära omständigheter" för att slippa betala ut 600 €. Här är vad som verkligen gäller:
          </p>

          <div className="space-y-4 my-6">
            <div className="flex gap-4 p-4 border rounded-lg border-red-200 bg-red-50 dark:bg-red-950/20">
              <XCircle className="text-red-500 w-6 h-6 flex-shrink-0" />
              <div>
                <strong>Dåligt väder över Atlanten:</strong> Kan vara extraordinärt. Om det råder jetströmsproblem eller extrem turbulens som tvingar planet till en annan rutt, kan ersättningen utebli.
              </div>
            </div>
            <div className="flex gap-4 p-4 border rounded-lg border-green-200 bg-green-50 dark:bg-green-950/20">
              <CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0" />
              <div>
                <strong>Tekniskt fel (vanligt på långdistansflyg):</strong> Ger <strong>ALLTID RÄTT</strong> till ersättning. Tekniskt fel är inte extraordinärt enligt EU-domstolen.
              </div>
            </div>
            <div className="flex gap-4 p-4 border rounded-lg border-green-200 bg-green-50 dark:bg-green-950/20">
              <CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0" />
              <div>
                <strong>Personalbrist (Crew shortage):</strong> Ger rätt till 600 €. Det är flygbolagets ansvar att ha reservpersonal.
              </div>
            </div>
          </div>
        </div>

        <Card className="p-8 my-12 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Låt inte flygbolaget behålla dina pengar
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Att driva ett ersättningskrav mot stora flygbolag själv kan vara utmattande. Låt ClaimWinger hjälpa dig — vi vinner 98% av våra fall.
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
              <Link href="https://claimwinger.com/sv">
                Starta ditt krav på 600 € →
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
