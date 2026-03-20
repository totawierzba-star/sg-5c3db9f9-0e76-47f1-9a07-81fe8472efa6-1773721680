import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, Plane, MapPin } from "lucide-react";
import Link from "next/link";

export default function RegionalaFlygplatserErsattning() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Jag var försenad från Umeå till Stockholm, gäller EU261?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, absolut. EU261 gäller alla inrikesflyg inom Sverige och EU. Om du var försenad mer än 3 timmar vid ankomst till Stockholm har du rätt till 250 € i kompensation från flygbolaget."
        }
      },
      {
        "@type": "Question",
        "name": "Får jag ersättning om vädret stängde flygplatsen i Kiruna?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oftast inte. Kraftiga snöstormar som tvingar flygplatsen att stänga klassificeras som 'extraordinära omständigheter', vilket befriar flygbolaget från att betala klumpsumman på 250 €. De måste dock fortfarande erbjuda dig mat, hotellövernattning och ombokning."
        }
      },
      {
        "@type": "Question",
        "name": "Mitt charterflyg från en liten flygplats var försenat. Kan jag få pengar från resebolaget?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Du vänder dig i första hand direkt till det flygbolag som utförde flygningen (operating carrier), inte resebyrån (t.ex. Ving, TUI). Vid mer än 3 timmars försening har du rätt till ersättning (upp till 600 €) beroende på flygsträcka."
        }
      }
    ]
  };

  return (
    <LayoutSv>
      <SEO 
        title="Regionala svenska flygplatser — Ersättning och EU-rättigheter"
        description="Flyger du från Umeå, Luleå, Skellefteå eller Växjö? Lär dig varför EU261 gäller även inrikes och hur du säkerställer att flygbolaget betalar din kompensation."
        image="/og-image.png"
        url="https://problemlot.com/sv/blog/regionala-flygplatser-sverige-ersattning"
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
          <span>Regionala flygplatser EU261</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🌲</span>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Mindre Flygplatser i Sverige
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Regionala svenska flygplatser — Samma EU-rättigheter, men färre känner till dem
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              10 min läsning
            </span>
            <span>•</span>
            <span>Uppdaterad: 7 mars 2025</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            När folk pratar om EU-lagstiftning för flyg (EU261) tänker de flesta på stora internationella flygningar från Arlanda eller Kastrup. Vad många från Umeå, Luleå, Skellefteå, Östersund, Växjö och Jönköping inte vet är att <strong>samma lag skyddar inrikesflyg och charterflyg från de regionala flygplatserna</strong>.
          </p>
        </div>

        <Card className="p-8 mb-12 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Fastnade du i Norrland eller Småland?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Lämna inte 250 € på bordet. Har inrikesflyget varit försenat kan vi hjälpa dig kräva flygbolaget på din lagstadgade kompensation.
              </p>
            </div>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg whitespace-nowrap">
              <Link href="https://claimwinger.com/sv">
                Få Din Ersättning Prövad →
              </Link>
            </Button>
          </div>
        </Card>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            EU261 gäller ALLA kommersiella passagerarflyg
          </h2>
          <p>
            Lagstiftningen gör ingen skillnad på storlek på flygplats eller storlek på flygplan, så länge det är en kommersiell flygning (alltså inte privat- eller taxiflyg). Det betyder att om du flyger från Luleå Airport (LLA) till Arlanda med SAS eller BRA, har du rätt till följande vid problem:
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
              <span><strong>Försening 3+ timmar:</strong> 250 € per passagerare.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
              <span><strong>Inställt flyg:</strong> Val mellan att få biljetten återbetald ELLER ombokning. Plus 250 € skadestånd om varslet var under 14 dagar.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
              <span><strong>Rätt till omvårdnad:</strong> Efter 2 timmars väntan ska flygbolaget tillhandahålla matkuponger, och måste de ställa in planet till nästa dag är de skyldiga att betala ditt hotell, även i en mindre stad.</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Charter från regionala flygplatser
          </h2>
          <p>
            Svenskar älskar att flyga charter direkt från sin lokala flygplats (t.ex. Jönköping Airport till Kanarieöarna eller Karlstad till Kreta). När dessa flyg blir försenade är det viktigt att veta vem du ska kräva på pengar.
          </p>
          <p>
            <strong>Regeln är:</strong> Kravet på ersättning enligt EU261 ska riktas till <strong>Operating Carrier</strong>, det vill säga flygbolaget som flög planet (t.ex. Sunclass Airlines, TUI fly, eller Novair), <em>inte</em> till resebyrån där du köpte semestern. Att missa en semesterdag i solen ger dig rätt till 400 € för sträckor mellan 1500 och 3500 km.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Varning för vintervädret i Norrland
          </h2>
          <p>
            Flygplatser i norra Sverige brottas ofta med kyla, snö och is. Flygbolagen älskar att använda "dåligt väder" som en universell ursäkt för att slippa betala. Men tänk på att rutinsnöröjning och avisning är en del av den förväntade driften under vinterhalvåret. Om förseningen beror på att de inte hunnit avisa planet i tid (men andra plan lyfter), har du ofta rätt till ersättning! Endast <strong>extremt snökaos</strong> som helt stänger luftrummet räknas som "extraordinärt".
          </p>
        </div>

        <Card className="p-8 my-12 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Vill du slippa bråka med flygbolagets jurister?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Små orter betyder inte små rättigheter. Låt ClaimWinger säkerställa att du får ut din kompensation snabbt och riskfritt.
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
              <Link href="https://claimwinger.com/sv/forsenat-flyg">
                Starta ditt krav nu →
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
