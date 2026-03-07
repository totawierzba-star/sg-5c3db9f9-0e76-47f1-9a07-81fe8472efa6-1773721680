import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, AlertTriangle, Clock, Plane } from "lucide-react";
import Link from "next/link";

export default function MissatAnslutningsflyArlanda() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hur mycket ersättning får jag om jag missar anslutningsflyg på Arlanda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ersättningen beror på den totala sträckan från ursprungsflygplatsen till slutdestinationen, inte bara det missade flyget. Du kan få 250 € (under 1500 km), 400 € (1500-3500 km) eller 600 € (över 3500 km). Avgörande är att du anländer minst 3 timmar försenat till slutmålet."
        }
      },
      {
        "@type": "Question",
        "name": "Vad ska jag göra direkt på Arlanda om jag missar mitt anslutningsflyg?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "1) Gå omedelbart till flygbolagets transfer desk eller vanliga desk, 2) Be om ombokning på nästa tillgängliga flyg, 3) Kräv skriftlig bekräftelse på förseningsorsaken, 4) Spara alla dokument (boardingkort, kvitton), 5) Kräv måltider och eventuellt hotell om väntetiden är lång."
        }
      },
      {
        "@type": "Question",
        "name": "Gäller ersättning om jag bokade flygningarna separat (inte samma bokning)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nej, EU261-ersättning gäller endast när båda flygningarna är bokade som en enda bokning (samma PNR-nummer). Om du bokade två separata biljetter och missade det andra flyget på grund av försening på det första, har du tyvärr inte automatisk rätt till ersättning enligt EU261."
        }
      },
      {
        "@type": "Question",
        "name": "Hur lång bytestid behöver jag på Arlanda för att flygbolaget ska vara ansvarigt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Det finns ingen lagstadgad minsta bytestid, men flygbolag måste ge 'tillräcklig tid' enligt EU261. På Arlanda rekommenderas: 45-60 minuter för Schengen-flyg (samma terminal), 90 minuter för icke-Schengen, 2 timmar för intercontinentala anslutningar. Om flygbolaget gav dig kortare tid och du missade flyget, stärker det ditt krav."
        }
      },
      {
        "@type": "Question",
        "name": "Kan jag få ersättning om jag checkade in bagage och det inte kom i tid?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja! Om ditt incheckat bagage orsakade att du missade anslutningsflyet (t.ex. för kort tid för bagagehantering), är det flygbolagets ansvar. Dessutom har du rätt till separat ersättning för försenat bagage enligt Montrealkonventionen (upp till ca 1500 € för kostnader)."
        }
      }
    ]
  };

  return (
    <LayoutSv>
      <SEO 
        title="Missat anslutningsflyg på Arlanda (ARN) — Ersättningsguide steg för steg 2025"
        description="Missade du ditt anslutningsflyg på Stockholm Arlanda? Få upp till 600 € ersättning enligt EU261. Komplett guide med juridiska tips och konkreta steg."
        image="/og-image.png"
        url="https://problemlot.com/sv/blog/missat-anslutningsflyg-arlanda"
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
          <span>Missat anslutningsflyg Arlanda</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">✈️</span>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Anslutningsflyg Stockholm Arlanda
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Missat anslutningsflyg på Arlanda — Ersättningsguide steg för steg
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              12 min läsning
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
            Stockholm Arlanda (ARN) är Sveriges största hub för anslutningsflyg, särskilt för SAS och Norwegian. Tusentals passagerare byter flyg här dagligen — men när det första flyget är försenat och du <strong>missar din anslutning</strong>, kan det bli dyrt för flygbolaget. Enligt <strong>EU-förordning 261/2004</strong> har du rätt till ersättning på <strong>upp till 600 €</strong> om du ankommer minst 3 timmar försenat till slutdestinationen.
          </p>
        </div>

        {/* CTA 1 */}
        <Card className="p-8 mb-12 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Missade du din anslutning på Arlanda?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Kontrollera om du har rätt till ersättning på 3 minuter. Ingen kostnad — vi tar betalt först när du får dina pengar.
              </p>
            </div>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg whitespace-nowrap">
              <Link href="https://claimwinger.com/sv">
                Kolla ersättning gratis →
              </Link>
            </Button>
          </div>
        </Card>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            När har du rätt till ersättning för missat anslutningsflyg?
          </h2>

          <p>
            För att få <Link href="https://claimwinger.com/sv/forsenat-flyg" className="text-blue-600 hover:underline">ersättning enligt EU261</Link> vid missat anslutningsflyg på Arlanda måste <strong>alla</strong> dessa villkor vara uppfyllda:
          </p>

          <Card className="p-6 my-8 bg-green-50 dark:bg-green-950 border-green-200">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
              Obligatoriska villkor för ersättning:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>En enda bokning:</strong> Båda flygningarna måste vara på samma bokningsnummer (PNR)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>Försening på första flyget:</strong> Det var det inledande flyget som blev försenat, inte ditt fel</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>3+ timmar sen ankomst:</strong> Du anlände minst 3 timmar senare till slutdestinationen än planerat</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>EU-anknytning:</strong> Minst ett av flygplanen avgick från EU eller flygbolaget är EU-baserat</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>Inte extraordinära omständigheter:</strong> Förseningen var inte orsakad av t.ex. extrem väderlek</span>
              </li>
            </ul>
          </Card>

          <div className="bg-red-50 dark:bg-red-950 border-l-4 border-red-600 p-6 my-8">
            <p className="text-gray-800 dark:text-gray-200 font-semibold mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              VIKTIGT: Separata bokningar = ingen EU261-ersättning
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Om du bokade första flyget (t.ex. Oslo–Stockholm) separat från andra flyget (Stockholm–Bangkok), gäller <strong>inte</strong> EU261 automatiskt. Flygbolagen har inget juridiskt ansvar för att få dig att hinna med ett flyg de inte sålde tillsammans med det första. Du kan fortfarande ha rättigheter enligt allmänna avtalsvillkor, men det är betydligt svårare att få ersättning.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Hur mycket ersättning kan du få?
          </h2>

          <p>
            Ersättningsbeloppet beror på den <strong>totala avståndet</strong> från din ursprungsflygplats till slutdestinationen — inte bara det missade flyget på Arlanda:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Total flygsträcka</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Exempel via Arlanda</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Ersättning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Under 1 500 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Oslo → ARN → Köpenhamn</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-green-600">250 €</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">1 500 – 3 500 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">London → ARN → Aten</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-green-600">400 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Över 3 500 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Paris → ARN → Bangkok</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-green-600">600 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-gray-800 dark:text-gray-200 font-semibold mb-2">
              💡 Exempel från verkliga fall:
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Scenario:</strong> Du flyger Oslo → Stockholm Arlanda (SAS SK1234) → Bangkok (SAS SK1789). Första flyget är försenat 2 timmar, du missar anslutningen på Arlanda och ombokas till ett flyg 6 timmar senare. Total försening till Bangkok: 8 timmar.<br/><br/>
              <strong>Resultat:</strong> Du har rätt till <span className="font-bold text-green-600">600 €</span> eftersom total sträcka Oslo–Bangkok är över 3500 km och du anlände 3+ timmar försenad.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Vad ska du göra direkt på Arlanda?
          </h2>

          <p>
            Tiden är avgörande när du missar ett anslutningsflyg. Följ dessa steg omedelbart:
          </p>

          <div className="space-y-6 my-8">
            <Card className="p-6 border-l-4 border-blue-600">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                Gå till Transfer Desk eller flygbolagets desk
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                På Arlanda finns transfer desks i varje terminal. Om du reser med SAS, gå till SAS-disken i din ankomstterminal. Be om ombokning på nästa tillgängliga flyg till din slutdestination.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-blue-600">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                Be om skriftlig bekräftelse
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Kräv ett <strong>skriftligt intyg</strong> om: 1) Orsaken till den ursprungliga förseningen, 2) Att du missade anslutningsflyet på grund av denna försening, 3) När du ombokas. Detta dokument är guld värt vid ersättningskrav.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-blue-600">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                Kräv assistans och kostnadsersättning
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Enligt EU261 artikel 9 har du rätt till: <strong>Gratis måltider</strong> (proportionell till väntetiden), <strong>Hotell</strong> om övernattning krävs, <strong>Transport</strong> till/från hotellet. Spara alla kvitton!
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-blue-600">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                Dokumentera allt
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Ta bilder av: Boardingkort (båda flygplanen), Informationstavlor som visar förseningen, Din bokningsbekräftelse (visa att båda flyg är på samma PNR), Kvitton för utgifter.
              </p>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Vanliga situationer på Arlanda
          </h2>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            Situation 1: För kort bytestid (flygbolagets fel)
          </h3>
          <p>
            Om flygbolaget gav dig en anslutning med bara 30-45 minuter mellan flyg på Arlanda (särskilt om du måste byta terminal eller passera säkerhetskontroll igen), och du missade anslutningen även om första flyget var i tid, kan du <strong>fortfarande</strong> ha rätt till ersättning. Flygbolaget är skyldigt att ge "tillräcklig tid" enligt EU261.
          </p>
          <div className="bg-yellow-50 dark:bg-yellow-950 border-l-4 border-yellow-600 p-6 my-6">
            <p className="text-gray-800 dark:text-gray-200">
              <strong>Rekommenderade bytestider på Arlanda:</strong><br/>
              • 45-60 min för Schengen-flyg (samma terminal)<br/>
              • 90 min för icke-Schengen (passkontroll krävs)<br/>
              • 2+ timmar för intercontinentala anslutningar
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            Situation 2: Bagage hann inte med
          </h3>
          <p>
            Om du själv hann till gaten i tid men ditt incheckat bagage inte överfördes i tid (och därför gick du ombord sent eller planet väntade), är det <strong>flygbolagets ansvar</strong>. Du har rätt till både EU261-ersättning för försening OCH separat ersättning för <Link href="https://claimwinger.com/sv/installat-flyg" className="text-blue-600 hover:underline">försenat bagage</Link> enligt Montrealkonventionen.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            Situation 3: SAS Plus/EuroBonus Fast Track på Arlanda
          </h3>
          <p>
            Om du har SAS Plus-biljett eller EuroBonus-status med tillgång till Fast Track säkerhetskontroll på Arlanda, bör detta <strong>inte</strong> påverka din rätt till ersättning. Även om du teoretiskt kunde ha gått snabbare genom kontrollen, är det flygbolagets ansvar att ge tillräcklig bytestid för genomsnittspassagerare.
          </p>
        </div>

        {/* CTA 2 */}
        <Card className="p-8 my-12 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200">
          <div className="text-center max-w-2xl mx-auto">
            <Plane className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Missade du din anslutning på Arlanda?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Låt ClaimWinger hantera ditt krav. Vi har 98% framgångsfrekvens och tar betalt först när du får ersättning.
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
              <Link href="https://claimwinger.com/sv">
                Få din ersättning →
              </Link>
            </Button>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              ✓ Gratis juridisk bedömning ✓ Ingen risk ✓ 50 000+ nöjda kunder
            </p>
          </div>
        </Card>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Vanliga frågor om missat anslutningsflyg
          </h2>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Hur mycket ersättning får jag om jag missar anslutningsflyg på Arlanda?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Ersättningen beror på den <strong>totala sträckan</strong> från ursprungsflygplatsen till slutdestinationen, inte bara det missade flyget. Du kan få 250 € (under 1500 km), 400 € (1500-3500 km) eller 600 € (över 3500 km). Avgörande är att du anländer minst 3 timmar försenat till slutmålet.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Vad ska jag göra direkt på Arlanda om jag missar mitt anslutningsflyg?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                1) Gå omedelbart till flygbolagets transfer desk eller vanliga desk, 2) Be om ombokning på nästa tillgängliga flyg, 3) Kräv skriftlig bekräftelse på förseningsorsaken, 4) Spara alla dokument (boardingkort, kvitton), 5) Kräv måltider och eventuellt hotell om väntetiden är lång.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Gäller ersättning om jag bokade flygningarna separat (inte samma bokning)?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Nej</strong>, EU261-ersättning gäller endast när båda flygningarna är bokade som en enda bokning (samma PNR-nummer). Om du bokade två separata biljetter och missade det andra flyget på grund av försening på det första, har du tyvärr inte automatisk rätt till ersättning enligt EU261.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Hur lång bytestid behöver jag på Arlanda för att flygbolaget ska vara ansvarigt?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Det finns ingen lagstadgad minsta bytestid, men flygbolag måste ge "tillräcklig tid" enligt EU261. På Arlanda rekommenderas: <strong>45-60 minuter</strong> för Schengen-flyg (samma terminal), <strong>90 minuter</strong> för icke-Schengen, <strong>2 timmar</strong> för intercontinentala anslutningar. Om flygbolaget gav dig kortare tid och du missade flyget, stärker det ditt krav.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Kan jag få ersättning om jag checkade in bagage och det inte kom i tid?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Ja!</strong> Om ditt incheckat bagage orsakade att du missade anslutningsflyet (t.ex. för kort tid för bagagehantering), är det flygbolagets ansvar. Dessutom har du rätt till separat ersättning för <Link href="https://claimwinger.com/sv" className="text-blue-600 hover:underline">försenat bagage</Link> enligt Montrealkonventionen (upp till ca 1500 € för kostnader).
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
            <Link href="/sv/blog/arlanda-forsenat-installat-flyg-guide" className="block p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 transition-colors">
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                Försening på Arlanda — Komplett guide
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Allt du behöver veta om dina rättigheter vid flyg från Stockholm Arlanda.
              </p>
            </Link>
            <Link href="/sv/forsenat-flyg" className="block p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 transition-colors">
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                Försenat flyg — Generell guide
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Omfattande information om EU261 och passagerarrättigheter.
              </p>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <Card className="mt-12 p-8 bg-blue-600 text-white">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Starta ditt ersättningskrav idag
            </h3>
            <p className="mb-6 text-blue-100">
              ClaimWinger har hjälpt över 50 000 passagerare få sina pengar. Ingen risk — vi tar betalt först vid framgång.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="https://claimwinger.com/sv">
                Kontrollera din ersättning →
              </Link>
            </Button>
          </div>
        </Card>
      </article>
    </LayoutSv>
  );
}