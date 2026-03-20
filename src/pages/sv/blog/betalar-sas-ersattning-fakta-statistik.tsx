import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, HelpCircle, BarChart3, AlertOctagon } from "lucide-react";
import Link from "next/link";

export default function BetalarSasErsattningFakta() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Betalar SAS ut den lagstadgade ersättningen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, SAS betalar ut ersättningar i enlighet med EU261. Men likt många bolag nekar de initialt en stor andel av legitima krav och hänvisar svepande till 'väder' eller liknande. När kraven drivs vidare via juridiska ombud eller Allmänna Reklamationsnämnden (ARN) betalar de oftast."
        }
      },
      {
        "@type": "Question",
        "name": "Varför nekar SAS mig när andra flyg lyfte?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SAS åberopar ofta 'extraordinära omständigheter', till exempel följdeffekter av dåligt väder tidigare under dagen, eftersom detta gör att de slipper betala. Ofta är dessa avslag orättmätiga, och det krävs flight-data (radar) för att motbevisa bolaget."
        }
      },
      {
        "@type": "Question",
        "name": "Vad är chansen att vinna mot SAS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Med ett erfaret ombud (ClaimWinger) är vinstchansen över 95% för giltiga ärenden (det vill säga när förseningen var deras eget fel och varade över 3 timmar)."
        }
      }
    ]
  };

  return (
    <LayoutSv>
      <SEO 
        title="Betalar SAS ut ersättning? Fakta & Statistik"
        description="Fakta och statistik om SAS utbetalningar av flygersättning enligt EU261. Får du nej på ditt krav? Se hur du tvingar fram pengarna."
        image="/og-image.png"
        url="https://problemlot.com/sv/blog/betalar-sas-ersattning-fakta-statistik"
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
          <span>Betalar SAS ersättning</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Betalar SAS ersättning — fakta, statistik och bekräftade fall
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 4 min läsning</span>
            <span>•</span>
            <span className="text-blue-600 font-semibold">Branschgranskning</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl text-gray-700 dark:text-gray-300 font-medium bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border-l-4 border-blue-600">
            <strong>Snabbt svar:</strong> <strong>Ja</strong>, SAS betalar, men de gör det ogärna frivilligt. Statistiskt sett avslår de initialt cirka 30-40% av alla direkta privata ansökningar och skyller på "säkerhetsbrister" eller "väder". När du anlitar ett ombud stiger din utdelningsfrekvens markant.
          </p>
        </div>

        {/* CTA 1 */}
        <Card className="p-8 mb-12 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 border-blue-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Nekad ersättning från SAS?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Ge inte upp! Vi överklagar SAS beslut dagligen och vinner miljontals kronor till passagerare årligen. Låt oss driva in ditt nekade krav.
              </p>
            </div>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg w-full md:w-auto">
              <Link href="https://claimwinger.com/sv">
                Ompröva SAS avslag nu →
              </Link>
            </Button>
          </div>
        </Card>

        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold mt-8 mb-4 flex items-center gap-2"><BarChart3 className="w-8 h-8 text-blue-500"/> Sanningen bakom "Extraordinära omständigheter"</h2>
          <p>
            SAS (likt många konkurrenter) använder sig rutinmässigt av paragrafen kring "extraordinära omständigheter". Det är juridiskt språk för: <em>"Det var inte vårt fel, vi betalar ingenting."</em>
          </p>
          <p>
            Några av deras vanligaste – och ofta ogiltiga – argument är:
          </p>
          <ul>
            <li><strong>"Tekniskt fel som upptäcktes vid säkerhetskontroll":</strong> EU-domstolen har slagit fast att normalt slitage och tekniska fel på maskinen i högsta grad ligger inom flygbolagets ansvar. SAS MÅSTE betala.</li>
            <li><strong>"Brist på besättning":</strong> Att personal blir sjuka eller att schemat spricker är ett operativt ansvar för flygbolaget. Undantaget är nationella strejker utanför deras kontroll (t.ex. hos flygledare).</li>
            <li><strong>"Dåligt väder på föregående flygning":</strong> Så kallade knock-on effects accepteras sällan rakt av.</li>
          </ul>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg my-6 flex gap-4">
            <AlertOctagon className="w-8 h-8 text-yellow-600 flex-shrink-0" />
            <p className="m-0 text-sm">
              ARN-statistik: SAS hamnar regelbundet högt på Allmänna Reklamationsnämndens Svarta Lista just för att de vägrar godkänna passagerarnas legitima krav förrän de hotas med stämning.
            </p>
          </div>
        </div>

        {/* CTA 2 (Przed FAQ) */}
        <div className="bg-blue-50 dark:bg-blue-950/30 p-8 rounded-2xl text-center mb-12 border border-blue-100 dark:border-blue-900">
          <AlertOctagon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Tvinga fram SAS betalning</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Våra advokater synar SAS ursäkter genom meteorologisk data och flightradars. Vi går till domstol för din rätt till 600 €.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            <Link href="https://claimwinger.com/sv">
              Skicka in ditt SAS-krav
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
              <h3 className="font-bold text-lg mb-2">Betalar SAS ut den lagstadgade ersättningen?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Ja, i slutändan. Men de använder ofta byråkrati och långsamma svarstider för att avskräcka kunder. När kraven drivs via jurister betalar de dock i stor utsträckning.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Varför nekar SAS mig när andra flyg lyfte?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Detta är tyvärr en vanlig taktik. Bolagen skyller på dåligt väder, trots att "vädret" bara påverkade deras besättningsschema. Sådana fall vinner man alltid om man tar det till rättslig nivå.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Vad är chansen att vinna mot SAS?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                När ditt flyg bevisligen var försenat med mer än 3 timmar på grund av tekniska eller operativa skäl, är dina chanser att vinna (via ombud) närmare 95-98%.
              </p>
            </Card>
          </div>
        </section>
      </article>
    </LayoutSv>
  );
}
