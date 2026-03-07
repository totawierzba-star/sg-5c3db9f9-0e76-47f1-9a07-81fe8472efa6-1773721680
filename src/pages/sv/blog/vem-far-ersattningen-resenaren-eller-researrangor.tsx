import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, HelpCircle, Users, Briefcase } from "lucide-react";
import Link from "next/link";

export default function VemFarErsattningen() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Vem får flygersättningen — resenären eller företaget som betalat biljetten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Flygersättningen för försenat eller inställt flyg tillhör ALLTID den person som faktiskt skulle flyga (passageraren), inte den som betalat biljetten. Detta gäller även för affärsresor där arbetsgivaren köpt resan."
        }
      },
      {
        "@type": "Question",
        "name": "Får resebyrån ta del av min kompensation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nej. Om du bokat din flygbiljett via en onlineresebyrå (t.ex. Ticket eller Travellink) har de ingen rätt till din EU-kompensation (upp till 600 €). Rätten är exklusivt knuten till dig som resenär."
        }
      },
      {
        "@type": "Question",
        "name": "Vad gäller vid inställd paketresa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vid en paketresa är det fortfarande du som passagerare som får EU261-kompensationen för flygproblemet. Dessutom kan du, enligt paketreselagen, ibland ha rätt till prisavdrag från arrangören för missade semesterdagar."
        }
      }
    ]
  };

  return (
    <LayoutSv>
      <SEO 
        title="Vem får ersättningen — resenären eller företaget/arbetsgivaren?"
        description="Betalade företaget eller resebyrån din biljett? Läs om vem som faktiskt har laglig rätt till EU-kompensationen på upp till 600 €."
        image="/og-image.png"
        url="https://problemlot.com/sv/blog/vem-far-ersattningen-resenaren-eller-researrangor"
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
          <span>Vem får flygersättningen</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Vem får ersättningen — resenären eller researrangören/arbetsgivaren?
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 4 min läsning</span>
            <span>•</span>
            <span className="text-blue-600 font-semibold">Lag & Rättigheter</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl text-gray-700 dark:text-gray-300 font-medium bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border-l-4 border-blue-600">
            <strong>Snabbt svar:</strong> Pengarna tillhör <strong>alltid passageraren</strong> som utför resan. Enligt EU-lagstiftning är kompensationen en ersättning för den personliga tiden och besväret du upplevt. Det spelar ingen som helst roll om det var din arbetsgivare, din sambo eller en resebyrå som betalade för biljetten.
          </p>
        </div>

        {/* CTA 1 */}
        <Card className="p-8 mb-12 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 border-blue-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Hade du en försening på jobbresan?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Du kan kräva 600 € rakt in på ditt privata bankkonto. Kolla ditt flyg nu — pengarna är dina!
              </p>
            </div>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg w-full md:w-auto">
              <Link href="https://claimwinger.com/sv">
                Kolla din ersättning →
              </Link>
            </Button>
          </div>
        </Card>

        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold mt-8 mb-4">Varför är regeln utformad så?</h2>
          <p>
            Många chefer och företagsekonomer tror felaktigt att företagets pengar ligger bakom resan, och att företaget därmed borde kompenseras när resan går fel. Men syftet med EU261 är inte att skydda ekonomiska intressen kopplade till biljetten. 
          </p>
          <p>
            <strong>Syftet med EU261 är att lindra det personliga lidandet:</strong> Den tid du tvingas sitta på golvet på en flygplats, stressen över att missa en anslutning och tröttheten. Detta drabbar din fysiska kropp, inte din arbetsgivares bokslut.
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-3">Undantag: Återbetalning av biljetten</h3>
          <p>
            Observera att det finns en skarp gräns mellan <em>kompensation</em> (det lagstadgade skadeståndet på 250 - 600 €) och <em>biljettåterbetalning</em> (när ett inställt flyg inte utnyttjas alls).
          </p>
          <ul>
            <li><strong>Kompensationen (250-600 €):</strong> Går till passageraren.</li>
            <li><strong>Återbetalning för själva flygbiljetten:</strong> Ska gå tillbaka till det kreditkort eller företagskonto som betalade resan.</li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg my-6 flex gap-4">
            <Briefcase className="w-8 h-8 text-blue-600 flex-shrink-0" />
            <p className="m-0 text-sm">
              Tjänsteman eller privatperson: Skriv in ditt privata kontonummer i ansökan. Låt inte flygbolaget förvirra dig att fylla i företagets bankgiro!
            </p>
          </div>
        </div>

        {/* CTA 2 */}
        <div className="bg-indigo-50 dark:bg-indigo-950/30 p-8 rounded-2xl text-center mb-12 border border-indigo-100 dark:border-indigo-900">
          <Users className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Säkra din privata ersättning</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Oavsett vem som köpte resan, hjälper ClaimWinger dig att få pengarna utbetalda direkt till dig.
          </p>
          <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8">
            <Link href="https://claimwinger.com/sv">
              Påbörja ditt krav privat
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
              <h3 className="font-bold text-lg mb-2">Vem får flygersättningen — resenären eller företaget som betalat biljetten?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Pengarna tillfaller uteslutande resenären som stod på biljetten och var med på resan, oavsett vem som betalade för biljetten.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Får resebyrån ta del av min kompensation?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nej. Bokningssidor (Ticket, Expedia etc.) har inga rättigheter till dina kompensationspengar, de är endast mellanhänder.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Vad gäller vid inställd paketresa?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Samma regler. Kompensationen för försenat flyg går till dig. Dessutom kan researrangören vara skyldig att återbetala delar av resans pris vid missade hotellnätter.
              </p>
            </Card>
          </div>
        </section>
      </article>
    </LayoutSv>
  );
}