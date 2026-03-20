import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, AlertCircle, Clock, Plane, Euro } from "lucide-react";
import Link from "next/link";

export default function ArlandaForsenatGuide() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hur lång försening krävs för ersättning från Arlanda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Du har rätt till ersättning om ditt flyg från Arlanda anländer minst 3 timmar försenat till slutdestinationen. Beloppet beror på flygsträckan: 250 € för flyg under 1500 km, 400 € för flyg 1500-3500 km inom EU, och 600 € för flyg över 3500 km eller utanför EU."
        }
      },
      {
        "@type": "Question",
        "name": "Gäller EU261 för alla flyg från Arlanda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, EU261 gäller för alla flyg som avgår från Arlanda (Stockholm Arlanda Airport), oavsett flygbolagets nationalitet. Det gäller även för ankommande flyg till Arlanda om flygbolaget är baserat i EU."
        }
      },
      {
        "@type": "Question",
        "name": "Vad ska jag göra direkt på Arlanda vid försening?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "1) Spara ditt boardingkort och kvitton, 2) Be flygbolaget om skriftlig bekräftelse på förseningsorsaken, 3) Ta bilder av informationstavlor, 4) Kräv måltider/boende om förseningen är längre än 2-4 timmar beroende på distans."
        }
      },
      {
        "@type": "Question",
        "name": "Kan jag få ersättning även vid tekniskt fel på Arlanda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja! Tekniska fel klassas INTE som extraordinära omständigheter enligt EU-domstolens praxis. Flygbolaget är ansvarigt för underhåll och du har rätt till full ersättning vid förseningar orsakade av tekniska problem."
        }
      },
      {
        "@type": "Question",
        "name": "Hur länge kan jag kräva ersättning för gamla flyg från Arlanda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I Sverige har du 3 år på dig att kräva ersättning från datum för den ursprungliga flygavgången. Om ditt flyg från Arlanda var försenat den 15 januari 2023, kan du kräva ersättning fram till den 14 januari 2026."
        }
      }
    ]
  };

  return (
    <LayoutSv>
      <SEO 
        title="Försening eller inställt flyg på Arlanda (ARN) — Passagerarrättigheter 2025"
        description="Komplett guide till dina rättigheter vid försening eller inställt flyg från Stockholm Arlanda. Få upp till 600 € ersättning enligt EU261. Gratis juridisk expertis."
        image="/og-image.png"
        url="https://problemlot.com/sv/blog/arlanda-forsenat-installat-flyg-guide"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          <Link href="/sv" className="hover:text-blue-600">Hem</Link>
          <span className="mx-2">/</span>
          <Link href="/sv/blog" className="hover:text-blue-600">Blogg</Link>
          <span className="mx-2">/</span>
          <span>Arlanda försening guide</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🇸🇪</span>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Stockholm Arlanda (ARN)
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Försening eller inställt flyg på Arlanda — Passagerarrättigheter komplett guide
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              14 min läsning
            </span>
            <span>•</span>
            <span>Uppdaterad: 7 mars 2025</span>
            <span>•</span>
            <span className="text-green-600 font-semibold">✓ Juridiskt verifierad</span>
          </div>
        </header>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Stockholm Arlanda (ARN) är Sveriges största flygplats med över 27 miljoner passagerare årligen. Trots effektiv drift drabbas tusentals resenärer varje år av <strong>förseningar över 3 timmar eller inställda flyg</strong>. Enligt EU-förordning 261/2004 har du rätt till <strong>ersättning på 250-600 €</strong> i dessa situationer — oavsett om du flyger med SAS, Ryanair, Norwegian eller något annat flygbolag från Arlanda.
          </p>
        </div>

        {/* CTA 1 - After introduction */}
        <Card className="p-8 mb-12 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Gratis kontroll på 3 minuter
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Var ditt flyg från Arlanda försenat eller inställt? Kontrollera dina rättigheter kostnadsfritt — ingen betalning förrän du får dina pengar.
              </p>
            </div>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg whitespace-nowrap">
              <Link href="https://claimwinger.com/sv">
                Kontrollera ersättning →
              </Link>
            </Button>
          </div>
        </Card>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            EU261 på Arlanda — Vad är dina rättigheter?
          </h2>
          
          <p>
            <Link href="https://claimwinger.com/sv/forsenat-flyg" className="text-blue-600 hover:underline">EU-förordning 261/2004</Link> ger passagerare starka rättigheter vid flygstörningar. Oavsett om ditt flyg avgår från Terminal 2, 3, 4 eller 5 på Arlanda, gäller följande:
          </p>

          <Card className="p-6 my-8 bg-green-50 dark:bg-green-950 border-green-200">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
              När har du rätt till ersättning?
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>Försening 3+ timmar:</strong> Om du ankommer minst 3 timmar försenat till slutdestinationen</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>Inställt flyg:</strong> Om flygbolaget informerade dig mindre än 14 dagar före avgång</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>Nekad ombordstigning:</strong> Om du blev nekad ombordstigning på grund av overbooking</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>Missat anslutningsflyg:</strong> På grund av initial försening från Arlanda</span>
              </li>
            </ul>
          </Card>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Hur mycket ersättning kan du få från Arlanda?
          </h2>

          <p>
            Ersättningsbeloppet beror på flygsträckan, inte biljettpriset. Här är den officiella tabellen enligt EU261:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Flygsträcka</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Exempel från Arlanda</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Ersättning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Under 1 500 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">London, Oslo, Köpenhamn</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-green-600">250 €</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">1 500 – 3 500 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Barcelona, Rom, Athen</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-green-600">400 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Över 3 500 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">New York, Dubai, Bangkok</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-green-600">600 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-gray-800 dark:text-gray-200 font-semibold mb-2">
              💡 Viktigt att veta:
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Ersättningen gäller <strong>per passagerare</strong>, inklusive barn. En familj på 4 personer kan få 4 × 400 € = 1 600 € vid en försening från Arlanda till Barcelona!
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Vad ska du göra direkt på Arlanda vid försening?
          </h2>

          <p>
            För att maximera dina chanser att få ersättning, följ dessa steg medan du fortfarande är på flygplatsen:
          </p>

          <div className="space-y-6 my-8">
            <Card className="p-6 border-l-4 border-blue-600">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                Spara alla dokument
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Behåll boardingkort (digitalt eller pappersformat), bokningsbekräftelse och kvitton för eventuella utgifter (mat, transport, boende).
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-blue-600">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                Be om skriftlig bekräftelse
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Gå till flygbolagets desk på Arlanda och be om ett skriftligt intyg om förseningsorsaken. Detta är avgörande bevis.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-blue-600">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                Dokumentera situationen
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Ta bilder av informationstavlorna på Arlanda som visar förseningen, samt eventuella meddelanden från flygbolaget på din telefon.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-blue-600">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                Kräv assistans
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Vid försening över 2 timmar (kortdistans) eller 4 timmar (långdistans) har du rätt till gratis måltider och förfriskningar på Arlanda. Vid nödvändigt övernattande ska flygbolaget betala hotell och transport.
              </p>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Extraordinära omständigheter — När gäller de INTE?
          </h2>

          <p>
            Flygbolag försöker ofta undvika ersättning genom att hänvisa till "extraordinära omständigheter". Men många av deras ursäkter är <strong>inte godkända</strong> enligt EU-domstolens praxis:
          </p>

          <Card className="p-6 my-8 bg-red-50 dark:bg-red-950 border-red-200">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <XCircle className="w-6 h-6 text-red-600" />
              Dessa ursäkter ger INTE rätt att vägra ersättning:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <span><strong>Tekniskt fel:</strong> Flygbolaget är ansvarigt för underhåll — DU HAR RÄTT till ersättning</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <span><strong>Personalstrejk hos flygbolaget:</strong> Intern strejk = flygbolagets problem, inte extraordinärt</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <span><strong>Tidigare fördröjning i kedjan:</strong> Flygbolaget måste ha reservplan</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <span><strong>"Operativa skäl":</strong> Vag formulering som inte håller juridiskt</span>
              </li>
            </ul>
          </Card>

          <div className="bg-green-50 dark:bg-green-950 border-l-4 border-green-600 p-6 my-8">
            <p className="text-gray-800 dark:text-gray-200 font-semibold mb-2">
              ✓ Godkända extraordinära omständigheter (du får ingen ersättning):
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 mt-3">
              <li>• Extrem väderlek (snöstorm, orkan) som stänger Arlanda</li>
              <li>• Flygtrafikledningsstrejk (inte flygbolagets personal)</li>
              <li>• Terroristrisk eller politisk instabilitet</li>
              <li>• Fågelkollision strax före/efter start</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Specifika situationer på Arlanda
          </h2>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            SAS från Arlanda — Vanligaste problemen
          </h3>
          <p>
            SAS är det dominerande flygbolaget på Arlanda med flest avgångar. Dessvärre leder detta också till flest förseningar. Typiska problem inkluderar:
          </p>
          <ul className="space-y-2 my-4">
            <li>• <strong>Tekniska fel:</strong> SAS äldre flygplansflotta (A330, A340) kräver frekvent underhåll</li>
            <li>• <strong>Crew shortage:</strong> Personalbrist leder till inställda flyg — du har rätt till ersättning!</li>
            <li>• <strong>Sen ankomst av föregående flyg:</strong> Inte extraordinärt — full ersättning gäller</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            Ryanair och Wizz Air från Arlanda
          </h3>
          <p>
            Lågprisflygbolag från Arlanda (främst Terminal 5) har egna utmaningar:
          </p>
          <ul className="space-y-2 my-4">
            <li>• <strong>Snäva tidsscheman:</strong> Kort turnaround-tid ökar risken för förseningar</li>
            <li>• <strong>Avlägsna destinationer:</strong> Ryanair-flyg till Östeuropa = ofta 400 € ersättning</li>
            <li>• <strong>Overbooking:</strong> Lågprisbolag översäljer medvetet — du har rätt till upp till 600 € vid nekad ombordstigning</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            Vinterväder på Arlanda — Vad gäller?
          </h3>
          <p>
            Stockholm-regionen upplever regelbundet snö och is under vintern. Men <strong>normal vinter ≠ extraordinära omständigheter</strong>:
          </p>
          <ul className="space-y-2 my-4">
            <li>• Arlanda har professionell snöröjningsutrustning — rutinsnö är ingen ursäkt</li>
            <li>• Endast <strong>extrem snöstorm</strong> (som stänger hela flygplatsen) räknas</li>
            <li>• Om andra flygbolag lyckas flyga från Arlanda, är din försening INTE extraordinär</li>
          </ul>
        </div>

        {/* CTA 2 - Before FAQ */}
        <Card className="p-8 my-12 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200">
          <div className="text-center max-w-2xl mx-auto">
            <Euro className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Var ditt flyg från Arlanda försenat eller inställt?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Kontrollera dina rättigheter på 3 minuter. ClaimWinger arbetar med no-win-no-fee — du betalar ingenting förrän du får dina pengar.
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
              <Link href="https://claimwinger.com/sv">
                Få din ersättning nu →
              </Link>
            </Button>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              ✓ Gratis kontroll ✓ 98% framgångsfrekvens ✓ Över 50 000 nöjda kunder
            </p>
          </div>
        </Card>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Vanliga frågor om försening på Arlanda
          </h2>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Hur lång försening krävs för ersättning från Arlanda?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Du har rätt till ersättning om ditt flyg från Arlanda anländer minst <strong>3 timmar försenat</strong> till slutdestinationen. Beloppet beror på flygsträckan: 250 € för flyg under 1500 km, 400 € för flyg 1500-3500 km inom EU, och 600 € för flyg över 3500 km eller utanför EU.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Gäller EU261 för alla flyg från Arlanda?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Ja, <Link href="https://claimwinger.com/sv" className="text-blue-600 hover:underline">EU261 gäller för alla flyg som avgår från Arlanda</Link> (Stockholm Arlanda Airport), oavsett flygbolagets nationalitet. Det gäller även för ankommande flyg till Arlanda om flygbolaget är baserat i EU.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Vad ska jag göra direkt på Arlanda vid försening?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                1) Spara ditt boardingkort och kvitton, 2) Be flygbolaget om skriftlig bekräftelse på förseningsorsaken, 3) Ta bilder av informationstavlor, 4) Kräv måltider/boende om förseningen är längre än 2-4 timmar beroende på distans.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Kan jag få ersättning även vid tekniskt fel på Arlanda?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Ja!</strong> Tekniska fel klassas INTE som extraordinära omständigheter enligt EU-domstolens praxis. Flygbolaget är ansvarigt för underhåll och du har rätt till full ersättning vid förseningar orsakade av tekniska problem.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Hur länge kan jag kräva ersättning för gamla flyg från Arlanda?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                I Sverige har du <strong>3 år</strong> på dig att kräva ersättning från datum för den ursprungliga flygavgången. Om ditt flyg från Arlanda var försenat den 15 januari 2023, kan du kräva ersättning fram till den 14 januari 2026.
              </p>
            </Card>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Läs även:
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/sv/blog/missat-anslutningsflyg-arlanda" className="block p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 transition-colors">
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                Missat anslutningsflyg på Arlanda
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Ersättningsguide steg för steg när du missar din connection på Arlanda.
              </p>
            </Link>
            <Link href="/sv/blog/arlanda-forsenade-flygbolag-statistik" className="block p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 transition-colors">
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                Mest försenade flygbolag på Arlanda
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Statistik och råd för att undvika förseningar från Stockholm Arlanda.
              </p>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <Card className="mt-12 p-8 bg-blue-600 text-white">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Kräv din ersättning från Arlanda idag
            </h3>
            <p className="mb-6 text-blue-100">
              Över 50 000 passagerare har redan fått sina pengar tillbaka. Gå med dem!
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="https://claimwinger.com/sv/forsenat-flyg">
                Starta ditt krav →
              </Link>
            </Button>
          </div>
        </Card>
      </article>
    </LayoutSv>
  );
}
