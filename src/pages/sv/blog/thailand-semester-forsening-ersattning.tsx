import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, MapPin, Plane } from "lucide-react";
import Link from "next/link";

export default function ThailandSemesterForsening() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Får jag 600 € i ersättning om mitt flyg till Thailand blir försenat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, eftersom sträckan Sverige–Thailand överstiger 3 500 km har du rätt till 600 € i kompensation. Villkoret är att flyget avgår från EU eller anländer till EU med ett EU-registrerat flygbolag, och att förseningen vid ankomst är mer än 3 timmar."
        }
      },
      {
        "@type": "Question",
        "name": "Mitt charterflyg till Phuket med Ving var försenat. Vem ska jag kräva pengar av?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ditt krav enligt EU261 ska riktas mot flygbolaget som utförde flygningen (operating carrier), t.ex. Sunclass Airlines eller TUI fly, inte resebyrån. Ofta kan du även kräva prisavdrag på själva charterresan enligt Paketreselagen."
        }
      },
      {
        "@type": "Question",
        "name": "Kan Norwegian eller SAS skylla på 'tekniskt fel' för att inte betala ersättning till Bangkok?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nej. Tekniska fel anses enligt EU-domstolen vara en del av flygbolagets normala verksamhet och utgör inte 'extraordinära omständigheter'. Du har därmed rätt till ersättning."
        }
      }
    ]
  };

  return (
    <LayoutSv>
      <SEO 
        title="Flyg till Thailand Försenat? Få 600 € i Ersättning"
        description="Har ditt semesterflyg från Sverige till Thailand (Bangkok, Phuket) blivit försenat? Läs om dina EU261-rättigheter och kräv 600 € i ersättning."
        image="/og-image.png"
        url="https://problemlot.com/sv/blog/thailand-semester-forsening-ersattning"
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
          <span>Sverige till Thailand</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🌴</span>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Långdistansresor
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Semesterflygningar från Sverige till Thailand — Förseningar och Ersättning
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
            Hundratusentals svenskar flyger till Thailand (främst Bangkok och Phuket) varje vinter för att undkomma kylan. När ett långdistansflyg på över 10 timmar försenas blir väntan ofta plågsam. Vad många inte vet är att dessa flygningar skyddas av <Link href="https://claimwinger.com/sv" className="text-blue-600 hover:underline">EU-förordning 261/2004</Link>, vilket innebär att en försening kan ge dig upp till <strong>600 € (ca 6 800 kr) per person i ersättning</strong>.
          </p>
        </div>

        <Card className="p-8 mb-12 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Blev Thailand-resan försenad?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Lämna inte pengarna till flygbolaget. Kontrollera din försening gratis och säkra upp till 600 €. En familj på 4 kan få över 27 000 kr.
              </p>
            </div>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg whitespace-nowrap">
              <Link href="https://claimwinger.com/sv/forsenat-flyg">
                Kontrollera Ersättning Gratis →
              </Link>
            </Button>
          </div>
        </Card>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            EU-lagstiftning tillämpas även för Asien
          </h2>
          <p>
            Avståndet mellan Sverige och Thailand överstiger 3 500 kilometer. Enligt EU-reglerna är du berättigad till den <strong>högsta ersättningsnivån, 600 €</strong>, om du ankommer till din slutdestination med mer än 3 timmars försening (eller om flyget blev inställt med kort varsel).
          </p>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            Regler för resan DIT (Sverige ➔ Thailand)
          </h3>
          <p>
            Alla flygningar som <strong>avgår från EU</strong> omfattas av regelverket. Oavsett om du flyger med SAS, Norwegian, Thai Airways eller ett mellanöstern-bolag (som Emirates via Dubai) har du full rätt till EU-ersättning vid försening.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            Regler för resan HEM (Thailand ➔ Sverige)
          </h3>
          <p>
            Här är det viktigt att vara uppmärksam. Eftersom du avgår från ett land utanför EU (Thailand) omfattas du av EU261 <strong>endast om flygbolaget är EU-registrerat</strong>.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li><strong>Flyg med SAS, Finnair eller KLM:</strong> EU-reglerna gäller! Du kan kräva 600 €.</li>
            <li><strong>Flyg med Thai Airways eller Qatar Airways:</strong> EU-reglerna gäller tyvärr INTE. Du hänvisas till flygbolagets egna (ofta sämre) villkor.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Charterflyg vs Reguljärflyg
          </h2>
          <p>
            Om du bokat en paketresa via Ving, TUI eller Apollo har du ett dubbelt skydd. Vid långa förseningar har du <strong>både</strong> rätt till den fasta EU-ersättningen (600 €) från flygbolaget (t.ex. Sunclass Airlines), OCH du kan ofta kräva prisavdrag för en förstörd resdag från researrangören enligt Paketreselagen.
          </p>
        </div>

        <Card className="p-8 my-12 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Vill du ha professionell hjälp mot flygbolaget?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Flygbolag försöker ofta neka ersättning för långdistansresor genom att åberopa "väder". ClaimWingers jurister vet hur man bevisar motsatsen och säkrar din kompensation. Vi tar risken – ingen vinst, ingen avgift.
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
              <Link href="https://claimwinger.com/sv">
                Kräv Din Ersättning På 3 Minuter →
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
