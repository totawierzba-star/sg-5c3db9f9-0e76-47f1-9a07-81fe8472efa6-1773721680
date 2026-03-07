import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, HelpCircle, Globe2, PlaneLanding, PlaneTakeoff } from "lucide-react";
import Link from "next/link";

export default function GallerEu261UtanforEuropa() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Gäller EU261 för flyg utanför Europa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, under två tydliga förutsättningar: Reglerna gäller antingen om flygningen AVGÅR från en flygplats i EU (oavsett vilket flygbolag du reser med), eller om flygningen ANLÄNDER till en EU-flygplats OCH utförs av ett EU-registrerat flygbolag."
        }
      },
      {
        "@type": "Question",
        "name": "Får jag ersättning om jag flyger från USA till Sverige med ett amerikanskt bolag?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nej. Eftersom flyget startar utanför EU och utförs av ett icke-europeiskt flygbolag (t.ex. Delta eller American Airlines), täcks inte resan av EU261. Då gäller amerikansk lag."
        }
      },
      {
        "@type": "Question",
        "name": "Skyddar EU261 min resa med SAS från Tokyo till Stockholm?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja. Även om resan startar utanför EU (Tokyo), så avslutas den i EU (Stockholm) och utförs av ett EU-flygbolag (SAS). Därför gäller reglerna till fullo."
        }
      }
    ]
  };

  return (
    <LayoutSv>
      <SEO 
        title="Gäller EU261 för flyg utanför Europa? | Gränser & Regler"
        description="Flyger du till USA, Asien eller Mellanöstern? Läs exakt när EU:s passagerarregler (EU261) skyddar din utlandsresa och när de inte gör det."
        image="/og-image.png"
        url="https://problemlot.com/sv/blog/galler-eu261-flyg-utanfor-europa"
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
          <span>EU261 utanför Europa</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Gäller EU261 för flyg utanför Europa?
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 4 min läsning</span>
            <span>•</span>
            <span className="text-green-600 font-semibold">Täckningsområde</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl text-gray-700 dark:text-gray-300 font-medium bg-green-50 dark:bg-green-950 p-6 rounded-lg border-l-4 border-green-600">
            <strong>Snabbt svar:</strong> <strong>Ja</strong>, EU261 fungerar ofta utmärkt på globala flygningar! Regeln är enkel: Det gäller alla avgångar FRÅN en EU-flygplats (oavsett bolag). För flyg TILL Europa från övriga världen gäller det endast om flygbolaget är baserat i EU (t.ex. SAS eller Lufthansa).
          </p>
        </div>

        {/* CTA 1 */}
        <Card className="p-8 mb-12 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 border-green-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Osäker på om ditt flyg täcks av lagen?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Skriv in din flygrutt hos oss. Vårt system känner direkt igen om du har rätt till 600 € via EU-skyddet.
              </p>
            </div>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg w-full md:w-auto">
              <Link href="https://claimwinger.com/sv">
                Testa ditt flyg gratis →
              </Link>
            </Button>
          </div>
        </Card>

        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold mt-8 mb-4">De tre scenarierna som styr</h2>
          <p>
            Många resenärer tror att de tappar alla rättigheter så fort de lämnar europeiskt luftrum, men jurisdiktionen följer med dig beroende på riktning och flygbolag:
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2 flex items-center gap-2"><PlaneTakeoff className="w-6 h-6 text-blue-500"/> Scenario 1: Avgång från EU</h3>
          <p>
            Flyger du <strong>från Stockholm till New York</strong>? Då gäller EU261 alltid. Det spelar absolut ingen roll om du flyger med SAS (EU) eller Delta Airlines (Icke-EU). Avreseflygplatsen bestämmer.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2 flex items-center gap-2"><PlaneLanding className="w-6 h-6 text-green-500"/> Scenario 2: Ankomst till EU med EU-bolag</h3>
          <p>
            Flyger du <strong>från New York till Stockholm</strong> med SAS, Lufthansa eller Air France? Då gäller EU261! Eftersom flygbolaget är registrerat inom unionen täcker de sina passagerare på hemresan.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2 flex items-center gap-2"><Globe2 className="w-6 h-6 text-red-500"/> Scenario 3: Ankomst till EU med Icke-EU bolag</h3>
          <p>
            Flyger du <strong>från Dubai till Stockholm</strong> med Emirates, eller från USA med United Airlines? Här upphör EU261 att gälla. Eftersom resan startade utanför EU och flygbolaget inte hör hemma i EU är du utlämnad till landets lokala lagar.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-3">Och vad händer med anslutningsflyg?</h3>
          <p>
            Om du reser på <em>samma bokning</em> (samma bokningsnummer) från Europa till slutdestinationen, räknas förseningen vid slutmålet, oavsett var på vägen förseningen uppstod.
          </p>
        </div>

        {/* CTA 2 */}
        <div className="bg-blue-50 dark:bg-blue-950/30 p-8 rounded-2xl text-center mb-12 border border-blue-100 dark:border-blue-900">
          <Globe2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Få upp till 600 € på långdistans</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Flygningar utanför Europa (över 3500 km) ger den högsta ersättningen enligt EU-reglerna. Låt oss driva in dina pengar!
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            <Link href="https://claimwinger.com/sv">
              Kräv dina 600 €
            </Link>
          </Button>
        </div>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <HelpCircle className="w-8 h-8 text-green-500" />
            Vanliga frågor (FAQ)
          </h2>
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Gäller EU261 för flyg utanför Europa?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Ja, om planet startar från EU, eller om det landar i EU och körs av ett europeiskt registrerat flygbolag.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Får jag ersättning om jag flyger från USA till Sverige med ett amerikanskt bolag?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nej. Utomeuropeiska flygbolag som flyger TILL Europa täcks inte av EU-lagstiftningen för förseningar.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Skyddar EU261 min resa med SAS från Tokyo till Stockholm?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Ja. Eftersom SAS är ett EU-baserat flygbolag, gäller skyddet även på resan tillbaka till Europa.
              </p>
            </Card>
          </div>
        </section>
      </article>
    </LayoutSv>
  );
}