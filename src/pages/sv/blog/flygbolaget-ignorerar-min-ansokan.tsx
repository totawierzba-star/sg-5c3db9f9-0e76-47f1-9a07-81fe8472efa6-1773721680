import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, HelpCircle, AlertCircle, MailWarning } from "lucide-react";
import Link from "next/link";

export default function FlygbolagetIgnorerarAnsokan() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Vad gör jag om flygbolaget ignorerar min ansökan om ersättning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Om flygbolaget inte svarar inom 6 till 8 veckor bör du skicka en formell påminnelse. Om de fortfarande ignorerar dig är nästa steg att antingen anmäla ärendet till den nationella tillsynsmyndigheten (t.ex. ARN i Sverige) eller ta hjälp av ett juridiskt ombud/ersättningsföretag som kan inleda en rättslig process."
        }
      },
      {
        "@type": "Question",
        "name": "Är det normalt att flygbolag dröjer med att svara?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, tyvärr är det mycket vanligt. Flygbolagen får in tusentals krav, speciellt efter sommaren, och använder ofta fördröjning som en medveten taktik för att få passagerare att ge upp och sluta ställa krav."
        }
      },
      {
        "@type": "Question",
        "name": "Hur lång tid har flygbolaget på sig att svara enligt lag?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EU261-förordningen anger ingen exakt gräns i antal dagar för flygbolagens svarstid, men etablerad praxis inom EU är att ett slutgiltigt svar bör ges inom högst 2 månader."
        }
      }
    ]
  };

  return (
    <LayoutSv>
      <SEO 
        title="Vad gör jag om flygbolaget ignorerar min ansökan? | Guide"
        description="Får du inget svar från flygbolaget angående din flygersättning? Läs vår guide om nästa steg för att tvinga fram dina pengar (upp till 600 €)."
        image="/og-image.png"
        url="https://problemlot.com/sv/blog/flygbolaget-ignorerar-min-ansokan"
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
          <span>Flygbolag ignorerar ansökan</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Vad gör jag om flygbolaget ignorerar min ansökan?
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min läsning</span>
            <span>•</span>
            <span className="text-red-600 font-semibold">Taktik & Råd</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl text-gray-700 dark:text-gray-300 font-medium bg-red-50 dark:bg-red-950 p-6 rounded-lg border-l-4 border-red-600">
            <strong>Snabbt svar:</strong> Har det gått mer än 6-8 veckor utan svar? Skicka en sista formell påminnelse. Om de fortsätter ignorera dig är det mest effektiva att anlita experter som sätter juridisk press på bolaget, eller att ta ärendet till Allmänna Reklamationsnämnden (ARN).
          </p>
        </div>

        {/* CTA 1 */}
        <Card className="p-8 mb-12 bg-gradient-to-br from-red-50 to-orange-100 dark:from-red-950 dark:to-orange-900 border-red-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Trött på att vänta på flygbolaget?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Låt ClaimWinger ta över kommunikationen. Vi hotar med rättsliga åtgärder och ser till att bolagen inte kan ignorera ditt krav.
              </p>
            </div>
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg w-full md:w-auto">
              <Link href="https://claimwinger.com/sv">
                Få professionell hjälp direkt →
              </Link>
            </Button>
          </div>
        </Card>

        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold mt-8 mb-4">Tystnad är en medveten strategi</h2>
          <p>
            Du har skickat in alla dokument, fyllt i de krångliga formulären och... ingenting händer. Det är tyvärr en utbredd och cynisk strategi från många flygbolag. De vet att majoriteten av alla resenärer till slut tappar tålamodet och ger upp. Genom att dra ut på tiden sparar de miljontals kronor årligen.
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-3">Steg 1: Skicka en påminnelse (Notice of Default)</h3>
          <p>
            Om du har väntat i två månader, skicka ett kortfattat mejl eller meddelande via deras portal. Ange ditt ärendenummer och skriv att du förväntar dig ett svar inom 14 dagar. Informera dem om att du annars kommer att vidta rättsliga åtgärder.
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-3">Steg 2: Ta fallet vidare</h3>
          <p>
            Om påminnelsen förblir obesvarad har du två huvudalternativ:
          </p>
          <ul>
            <li><strong>Allmänna Reklamationsnämnden (ARN):</strong> Det är gratis, men kötiden är ofta mellan 6 till 12 månader. Dessutom är deras beslut "rekommendationer", vilka vissa utländska lågprisbolag struntar i.</li>
            <li><strong>Ett ersättningsföretag (ombud):</strong> Du kan lämna över fallet till experter. Det kostar en procentsats av vinsten (ofta runt 30%), men processen är snabbare och de kan stämma flygbolaget i domstol, vilket flygbolagen faktiskt lyssnar på.</li>
          </ul>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg my-6 flex gap-4">
            <AlertCircle className="w-8 h-8 text-yellow-600 flex-shrink-0" />
            <p className="m-0 text-sm">
              Spara all kommunikation! Gör skärmdumpar på de formulär du skickat in och spara autogemensvar. Detta utgör viktiga bevis om ärendet går till rätten.
            </p>
          </div>
        </div>

        {/* CTA 2 */}
        <div className="bg-blue-50 dark:bg-blue-950/30 p-8 rounded-2xl text-center mb-12 border border-blue-100 dark:border-blue-900">
          <MailWarning className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Vi får dem att lyssna</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Flygbolagen ignorerar ofta privatpersoner, men sällan juridiska ombud. Starta din kostnadsfria ansökan idag.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            <Link href="https://claimwinger.com/sv">
              Driv in din ersättning nu
            </Link>
          </Button>
        </div>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <HelpCircle className="w-8 h-8 text-red-500" />
            Vanliga frågor (FAQ)
          </h2>
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Vad gör jag om flygbolaget ignorerar min ansökan om ersättning?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Vänta ca 6 veckor. Om du inte fått svar, skicka en skriftlig påminnelse. Nästa steg är att kontakta Konsumentverket/ARN eller ett ombud som stämmer dem.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Är det normalt att flygbolag dröjer med att svara?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Ja, extremt vanligt. Det är en taktik för att trötta ut dig så att du ska sluta ställa krav. De har oftast stor arbetsbelastning som ursäkt.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Hur lång tid har flygbolaget på sig att svara enligt lag?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Lagen (EU261) har ingen fixerad gräns, men myndigheterna anser att upp till 2 månader är en skälig och maximal handläggningstid.
              </p>
            </Card>
          </div>
        </section>
      </article>
    </LayoutSv>
  );
}