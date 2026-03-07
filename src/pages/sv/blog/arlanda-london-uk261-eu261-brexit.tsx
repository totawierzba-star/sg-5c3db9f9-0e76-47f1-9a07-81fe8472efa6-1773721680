import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, AlertCircle, Clock, Plane } from "lucide-react";
import Link from "next/link";

export default function ArlandaLondonBrexit() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hur mycket ersättning gäller för försening från Arlanda till London?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eftersom flygsträckan mellan Arlanda (Sverige) och London är strax under 1500 km, har du rätt till 250 € i ersättning, alternativt £220 om ersättningen regleras av brittiska UK261, vid en försening på över 3 timmar."
        }
      },
      {
        "@type": "Question",
        "name": "Vad är skillnaden mellan EU261 och UK261?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I praktiken är de nästan identiska. Storbritannien kopierade EU261 till sin egen lagstiftning (UK261) efter Brexit. Rättigheterna, reglerna kring extraordinära omständigheter och skyddet är i stort sett exakt desamma. Ersättningen kan dock betalas ut i GBP (£220) istället för EUR (250 €)."
        }
      },
      {
        "@type": "Question",
        "name": "Jag flyger British Airways från Arlanda, vilken lag gäller?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "När du flyger FRÅN Arlanda (EU) är du skyddad av EU261, oavsett att British Airways är ett brittiskt (icke-EU) bolag. Din rätt till 250 € ersättning står fast."
        }
      },
      {
        "@type": "Question",
        "name": "Jag flyger SAS från London till Arlanda, vilken lag gäller?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "När du flyger från Storbritannien till EU (Arlanda) skyddas du antingen av UK261 (eftersom du avgår från UK) ELLER av EU261 (eftersom du flyger med ett EU-bolag, SAS). Du kan dock inte kräva dubbel ersättning."
        }
      }
    ]
  };

  return (
    <LayoutSv>
      <SEO 
        title="Arlanda till London försenat? EU261 vs UK261 efter Brexit"
        description="Flygproblem mellan Stockholm och London? Förstå dina rättigheter efter Brexit och lär dig hur du kräver ersättning (250 € / £220)."
        image="/og-image.png"
        url="https://problemlot.com/sv/blog/arlanda-london-uk261-eu261-brexit"
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
          <span>Arlanda till London (Brexit)</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🇬🇧</span>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Flygrättigheter efter Brexit
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Arlanda till London — UK261 vs EU261 och din rätt till ersättning
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
            Rutten mellan Stockholm Arlanda och Londons flygplatser (Heathrow, Gatwick, Stansted) trafikeras intensivt av SAS, British Airways, Ryanair och Norwegian. Men efter att Storbritannien lämnade EU (Brexit), har många resenärer blivit osäkra: <strong>Förlorade jag min rätt till ersättning? Svaret är absolut nej.</strong>
          </p>
        </div>

        <Card className="p-8 mb-12 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Försenat flyg till/från London?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Säkerställ dina 250 € (eller £220). Kolla din rätt på 3 minuter och låt ClaimWingers experter hantera all kontakt med flygbolaget.
              </p>
            </div>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg whitespace-nowrap">
              <Link href="https://claimwinger.com/sv/forsenat-flyg">
                Starta Krav Nu →
              </Link>
            </Button>
          </div>
        </Card>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Vad innebär UK261 för svenska passagerare?
          </h2>
          <p>
            Inför Brexit valde Storbritannien att föra över hela <Link href="https://claimwinger.com/sv" className="text-blue-600 hover:underline">EU-förordning 261/2004</Link> direkt in i sin egen nationella lagstiftning. Detta blev lag <strong>UK261</strong>. Detta betyder att du har <strong>exakt samma rättigheter</strong>, till exempel gällande hotellövernattning, mat, dryck och ekonomisk kompensation.
          </p>
          <p>
            Det enda som ändrades var valutan för ersättning. I EU261 uttrycks ersättningen i Euro (250 €, 400 €, 600 €). I brittiska UK261 uttrycks den i Pund (£220, £350, £520).
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Vilken lag gäller för din flygning?
          </h2>

          <div className="space-y-6 my-8">
            <Card className="p-6 border-l-4 border-blue-600">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                Scenario 1: Från Arlanda till London (Alla bolag)
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Du skyddas av <strong>EU261</strong>, eftersom planet lyfter från svensk (EU) mark. Detta gäller oavsett om du flyger SAS, Norwegian, Ryanair eller British Airways. Rätt till 250 €.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-yellow-600">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                Scenario 2: Från London till Arlanda (SAS eller Norwegian)
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Du avgår utanför EU, men landar i EU OCH flyger med ett europeiskt flygbolag (t.ex. SAS). Här täcks du av <strong>både UK261 och EU261</strong>.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-red-600">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                Scenario 3: Från London till Arlanda (British Airways)
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                British Airways är ett UK-bolag. När du flyger ut från London skyddas du av <strong>UK261</strong>. Rättigheterna för 3 timmars försening är desamma (ersättning £220).
              </p>
            </Card>
          </div>
        </div>

        <Card className="p-8 my-12 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Vill du slippa byråkratin?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Flygbolag hänvisar ofta felaktigt till Brexit för att neka kompensation. Låt ClaimWingers experter hantera ärendet åt dig, oavsett om fallet faller under EU- eller brittisk lagstiftning.
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
              <Link href="https://claimwinger.com/sv">
                Få Din Ersättning Tryggt →
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