import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, HelpCircle, Scale, PiggyBank } from "lucide-react";
import Link from "next/link";

export default function BehoverJagAnlitaOmbud() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Behöver jag anlita ett ombud för att få min flygersättning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nej, det finns inget juridiskt krav på att ha ett ombud. Du har full rätt att driva kravet själv direkt via flygbolagets hemsida. Att anlita experter är dock ett populärt val för de som vill spara tid eller om flygbolaget vägrar samarbeta."
        }
      },
      {
        "@type": "Question",
        "name": "Vad är fördelen med att använda ett ersättningsföretag?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De har experter och advokater som vet hur man bestrider falska ursäkter (som 'extraordinära omständigheter'). Om flygbolaget nekar kan ombudet ta fallet till domstol, något få privatpersoner har tid eller råd att göra själva."
        }
      },
      {
        "@type": "Question",
        "name": "Vad kostar det att anlita ett ombud för flygförsening?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De flesta fungerar enligt 'No Win, No Fee'-modellen. Det är helt gratis att ansöka, och om de lyckas vederläggs en procentsats (vanligtvis 25-35% + moms) från din ersättning."
        }
      }
    ]
  };

  return (
    <LayoutSv>
      <SEO 
        title="Behöver jag anlita ett ombud för flygersättning? | Sverige"
        description="Göra det själv eller ta juridisk hjälp för flygförseningen? Vi jämför kostnader, tid och chanser att vinna mot flygbolagen."
        image="/og-image.png"
        url="https://problemlot.com/sv/blog/behover-jag-anlita-ombud-flygersattning"
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
          <span>Anlita ombud flygersättning</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Behöver jag anlita ett ombud för att få flygersättning?
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 4 min läsning</span>
            <span>•</span>
            <span className="text-purple-600 font-semibold">Tid vs Pengar</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl text-gray-700 dark:text-gray-300 font-medium bg-purple-50 dark:bg-purple-950 p-6 rounded-lg border-l-4 border-purple-600">
            <strong>Snabbt svar:</strong> Nej, det är helt valfritt. Du kan söka själv via flygbolagets hemsida gratis. Att använda ClaimWinger är ett alternativ för dig som vill slippa pappersarbete, eller när flygbolaget vägrar betala ut pengarna och ljuger om förseningens orsak.
          </p>
        </div>

        {/* CTA 1 */}
        <Card className="p-8 mb-12 bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-purple-950 dark:to-indigo-900 border-purple-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Slipp pappersarbetet
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Vi sköter all kontakt med flygbolaget. Du betalar ingenting förrän pengarna sitter på ditt konto!
              </p>
            </div>
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg w-full md:w-auto">
              <Link href="https://claimwinger.com/sv">
                Få hjälp direkt →
              </Link>
            </Button>
          </div>
        </Card>

        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold mt-8 mb-4">Göra det själv vs. Ombud</h2>
          <p>
            Här är den ärliga skillnaden på de två sätten att hantera ersättningar (enligt EU261):
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-3 flex items-center gap-2"><PiggyBank className="w-6 h-6 text-green-600"/> Göra det själv:</h3>
          <ul>
            <li><strong>Fördelar:</strong> Du behåller 100% av ersättningen (upp till 600 €).</li>
            <li><strong>Nackdelar:</strong> Det kräver din tid. Flygbolagets formulär är ofta avsiktligt krångliga. De kan ignorera dina mejl, och om de skyller på "dåligt väder" har du som privatperson svårt att bevisa att de ljuger.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-6 mb-3 flex items-center gap-2"><Scale className="w-6 h-6 text-blue-600"/> Ta hjälp (t.ex. ClaimWinger):</h3>
          <ul>
            <li><strong>Fördelar:</strong> Processen tar dig max 2 minuter. Våra advokater använder flygdata och radartrafik för att stänga ner flygbolagens ursäkter. Vi går till domstol vid behov – vilket garanterar utbetalning om vi har rätt i sak.</li>
            <li><strong>Nackdelar:</strong> Vi behåller en provision av summan vi vinner åt dig.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-8 mb-4">När MÅSTE man anlita experter?</h2>
          <p>
            Vissa passagerare börjar själva men övergår till ett ombud när de får ett orimligt avslag (t.ex. att flygbolaget hävdar extraordinära omständigheter trots att alla andra plan lyfte som vanligt). När kommunikationen låser sig är ombud den enda vägen framåt för att tvinga fram dina pengar.
          </p>
        </div>

        {/* CTA 2 */}
        <div className="bg-blue-50 dark:bg-blue-950/30 p-8 rounded-2xl text-center mb-12 border border-blue-100 dark:border-blue-900">
          <Scale className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Låt lagen jobba för dig</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Välj den smidiga vägen. Vi driver ärendet hela vägen till rätten om flygbolaget bråkar – No win, no fee.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            <Link href="https://claimwinger.com/sv">
              Anlita oss riskfritt idag
            </Link>
          </Button>
        </div>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <HelpCircle className="w-8 h-8 text-purple-500" />
            Vanliga frågor (FAQ)
          </h2>
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Behöver jag anlita ett ombud för att få min flygersättning?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nej, du har rätt att sköta kravet helt själv. Ombud används främst för att spara tid och för deras förmåga att pressa flygbolagen rättsligt.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Vad är fördelen med att använda ett ersättningsföretag?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Experter vet när flygbolaget ljuger och kan stämma dem i domstol utan att du som kund tar någon ekonomisk risk.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Vad kostar det att anlita ett ombud för flygförsening?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Du betalar inget i förskott ("No Win, No Fee"). Företaget tar istället en fast procentsats (oftast runt 30%) på det belopp som de vinner åt dig.
              </p>
            </Card>
          </div>
        </section>
      </article>
    </LayoutSv>
  );
}
