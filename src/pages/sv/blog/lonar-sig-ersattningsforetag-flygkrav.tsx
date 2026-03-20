import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, HelpCircle, Briefcase, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function LonarSigErsattningsforetag() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Lönar det sig att använda ett ersättningsföretag för flygkrav?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, statistiskt sett vinner ersättningsföretag betydligt fler tvister mot flygbolagen än privatpersoner gör. Om du blivit ignorerad, eller fått avslag med hänvisning till 'extraordinära omständigheter', lönar det sig nästan alltid eftersom alternativet är noll kronor."
        }
      },
      {
        "@type": "Question",
        "name": "Vad kostar det att använda ClaimWinger för flygersättning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vi arbetar efter 'No Win, No Fee'-modellen. Det är helt gratis att ansöka. Om vi inte vinner ditt fall kostar det dig absolut ingenting. Endast när pengarna betalas ut drar vi av en fast provision från ersättningen."
        }
      },
      {
        "@type": "Question",
        "name": "Varför nekar flygbolagen mig men godkänner krav från ombud?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Flygbolag räknar med att de flesta privatpersoner ger upp vid ett första avslag. Ersättningsföretag som ClaimWinger använder avancerad flygdata, väderrapporter och advokater som hotar med domstol, vilket tvingar bolagen att följa EU-lagen."
        }
      }
    ]
  };

  return (
    <LayoutSv>
      <SEO 
        title="Lönar det sig att använda ett ersättningsföretag för flygkrav?"
        description="Är det värt att ta juridisk hjälp mot flygbolaget? Läs om kostnader, chanser att vinna och varför ombud ofta är det enda sättet att få pengarna."
        image="/og-image.png"
        url="https://problemlot.com/sv/blog/lonar-sig-ersattningsforetag-flygkrav"
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
          <span>Ersättningsföretag flygkrav lönar sig</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Lönar det sig att använda ett ersättningsföretag för flygkrav?
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 4 min läsning</span>
            <span>•</span>
            <span className="text-blue-600 font-semibold">Expertråd</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl text-gray-700 dark:text-gray-300 font-medium bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border-l-4 border-blue-600">
            <strong>Snabbt svar:</strong> Om du vill spara tid, eller om flygbolaget redan gett dig ett nej eller ignorerat dig, lönar det sig absolut. Alternativet är ofta att du får 0 €. Även efter avdrag för provision får du oftast ut en betydande summa (upp till 450 € netto) helt utan egen ansträngning.
          </p>
        </div>

        {/* CTA 1 */}
        <Card className="p-8 mb-12 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 border-blue-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Trött på att slåss mot flygbolaget?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Låt oss göra jobbet. Du betalar noll kronor förrän vi vunnit fallet och du har pengarna i handen.
              </p>
            </div>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg w-full md:w-auto">
              <Link href="https://claimwinger.com/sv">
                Så fungerar det →
              </Link>
            </Button>
          </div>
        </Card>

        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold mt-8 mb-4">Så maximerar experter dina chanser</h2>
          <p>
            Att anmäla ett försenat flyg själv är teoretiskt sett gratis och du behåller 100% av de 250 - 600 euro som EU-lagen ger dig rätt till. Men det finns en hake: flygbolagen vet att du förmodligen inte kommer att stämma dem om de hittar på en svepskäl.
          </p>
          <p>
            Ett ersättningsföretag (ombud) fungerar som en juridisk sköld. De tillför tre kritiska saker som tvingar flygbolagen att betala:
          </p>
          <ul>
            <li><strong>Historisk flygdata:</strong> De kan bevisa att "dåligt väder" var en lögn eftersom andra plan lyfte samtidigt.</li>
            <li><strong>Domstolsrutin:</strong> De drar sig inte för att starta en rättsprocess lokalt mot bolaget.</li>
            <li><strong>Skalfördelar:</strong> Flygbolag prioriterar krav från byråer som samlar många ärenden eftersom det annars blir mass-stämningar.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-6 mb-3 flex items-center gap-2"><TrendingUp className="w-6 h-6 text-green-600"/> Matematiken: Bättre med 70% än ingenting</h3>
          <p>
            Om ersättningsnivån är 600 €, och bolaget ignorerar dig, är ditt saldo noll. Överlåter du fallet förlorar du en viss provision (exempelvis ~30%), men du får cirka 420 € in på ditt konto — för två minuters ifyllande av ett webbformulär.
          </p>
        </div>

        {/* CTA 2 (Przed FAQ) */}
        <div className="bg-indigo-50 dark:bg-indigo-950/30 p-8 rounded-2xl text-center mb-12 border border-indigo-100 dark:border-indigo-900">
          <Briefcase className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Låt lagen jobba för dig</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Gör som tusentals andra svenskar. Låt professionella jurister hantera flygbolagets krångel och invändningar helt riskfritt.
          </p>
          <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8">
            <Link href="https://claimwinger.com/sv">
              Läs mer om hur vi jobbar
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
              <h3 className="font-bold text-lg mb-2">Lönar det sig att använda ett ersättningsföretag för flygkrav?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Ja, speciellt i fall där flygbolaget drar ut på tiden eller hänvisar till extraordinära omständigheter. Win-raten är avsevärt mycket högre än för privatpersoner.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Vad kostar det att använda ClaimWinger för flygersättning?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Vi tar endast en provision om vi lyckas få ut dina pengar. Vid förlust står vi för advokat- och rättegångskostnader.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Varför nekar flygbolagen mig men godkänner krav från ombud?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                De vet att privatpersoner sällan drar saken till tingsrätten, medan juridiska ombud gör det rutinmässigt. Det tvingar bolagen till ärlighet.
              </p>
            </Card>
          </div>
        </section>
      </article>
    </LayoutSv>
  );
}
