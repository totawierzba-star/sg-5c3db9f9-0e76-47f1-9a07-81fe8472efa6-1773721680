import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, HelpCircle, CalendarDays, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function HurLangTidAnsokaSverige() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hur lång tid har jag på mig att ansöka om flygersättning i Sverige?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "För flygningar som avgick från, eller landade i, Sverige med ett EU-registrerat bolag är preskriptionstiden hela 3 år. Du har alltså 3 år från flygdatumet på dig att lämna in ditt ersättningskrav."
        }
      },
      {
        "@type": "Question",
        "name": "Påverkas preskriptionstiden om jag flög till ett annat land?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, ibland. Preskriptionstiden regleras av nationell lagstiftning. Om du exempelvis flög från Storbritannien kan du ha hela 6 år på dig, medan resor kopplade till Tyskland ofta har 3 års preskriptionstid räknat från årets slut."
        }
      },
      {
        "@type": "Question",
        "name": "Ska jag vänta innan jag skickar in min ansökan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nej. Även om du har upp till 3 år på dig i Sverige, är det alltid bäst att ansöka omedelbart. Bevis (som mail och biljetter) finns kvar, och flygbolagets databaser är färskare, vilket påskyndar utbetalningen av dina 600 €."
        }
      }
    ]
  };

  return (
    <LayoutSv>
      <SEO 
        title="Hur lång tid har jag på mig att ansöka om flygersättning? | Sverige"
        description="Läs allt om preskriptionstiden i Sverige (och EU) för att kräva ersättning för försenade eller inställda flyg. Se tidsgränserna här."
        image="/og-image.png"
        url="https://problemlot.com/sv/blog/hur-lang-tid-ansoka-flygersattning-sverige"
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
          <span>Tid ansöka flygersättning Sverige</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Hur lång tid har jag på mig att ansöka om flygersättning i Sverige?
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 3 min läsning</span>
            <span>•</span>
            <span className="text-red-600 font-semibold">Tidsfrister</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl text-gray-700 dark:text-gray-300 font-medium bg-red-50 dark:bg-red-950 p-6 rounded-lg border-l-4 border-red-600">
            <strong>Snabbt svar:</strong> I Sverige gäller <strong>3 års preskriptionstid</strong> från det datum flyget var planerat att avgå. Inom denna tidsram har du full juridisk rätt att kräva mellan 250 € och 600 € enligt EU-förordning 261/2004.
          </p>
        </div>

        {/* CTA 1 */}
        <Card className="p-8 mb-12 bg-gradient-to-br from-red-50 to-orange-100 dark:from-red-950 dark:to-orange-900 border-red-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Kontrollera gamla flygbiljetter!
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Har du drabbats av en försening under de senaste 3 åren? Låt inte pengarna förfalla. Ansök idag innan tidsfristen går ut.
              </p>
            </div>
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg w-full md:w-auto">
              <Link href="https://claimwinger.com/sv">
                Påbörja din ansökan →
              </Link>
            </Button>
          </div>
        </Card>

        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold mt-8 mb-4">Varför finns det olika tidsgränser?</h2>
          <p>
            Eftersom EU261/2004 är ett EU-direktiv lämnar det över beslutet om tidsgränser (preskription) till de enskilda medlemsstaternas nationella lagar. Detta betyder att tidsfristen kan ändras dramatiskt beroende på var du flög ifrån eller vilket flygbolag du använde.
          </p>
          
          <h3 className="text-2xl font-bold mt-6 mb-3 flex items-center gap-2"><CalendarDays className="w-6 h-6 text-gray-600"/> Preskriptionstider i populära länder:</h3>
          <ul>
            <li><strong>Sverige, Norge, Danmark:</strong> 3 år</li>
            <li><strong>Finland:</strong> 3 år</li>
            <li><strong>Spanien, Frankrike:</strong> 5 år</li>
            <li><strong>Storbritannien:</strong> 6 år</li>
            <li><strong>Italien:</strong> 2 år (mycket kort, se upp!)</li>
          </ul>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg my-6 flex gap-4">
            <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0" />
            <p className="m-0 text-sm">
              Många flygbolag försöker automatiskt avvisa krav som är äldre än ett år, i hopp om att du inte känner till den 3-åriga lagen. Stå på dig!
            </p>
          </div>
        </div>

        {/* CTA 2 (Przed FAQ) */}
        <div className="bg-blue-50 dark:bg-blue-950/30 p-8 rounded-2xl text-center mb-12 border border-blue-100 dark:border-blue-900">
          <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Tiden tickar ner...</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Säkra dina upp till 600 € innan ditt ärende blir juridiskt för gammalt. Processen hos oss tar bara 2 minuter.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            <Link href="https://claimwinger.com/sv">
              Kolla upp ett tidigare flyg
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
              <h3 className="font-bold text-lg mb-2">Hur lång tid har jag på mig att ansöka om flygersättning i Sverige?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Preskriptionstiden i Sverige är 3 år från flygets planerade datum. Om flyget avgick från eller landade i Sverige och uppfyller EU-reglerna är det denna gräns som gäller.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Påverkas preskriptionstiden om jag flög till ett annat land?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Ja, om domstolsjurisdiktionen hamnar i ankomstlandet kan tidsgränsen bli längre (t.ex. 6 år i UK) eller kortare (t.ex. 2 år i Italien).
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Ska jag vänta innan jag skickar in min ansökan?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Absolut inte. Det är bäst att agera omedelbart. Dokument kommer bort och bevisning (t.ex. väderrapporter från dagen i fråga) är enklare att fastställa i närtid.
              </p>
            </Card>
          </div>
        </section>
      </article>
    </LayoutSv>
  );
}
