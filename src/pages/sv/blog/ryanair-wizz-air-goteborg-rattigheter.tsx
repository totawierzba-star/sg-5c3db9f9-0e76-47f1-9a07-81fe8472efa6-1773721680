import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ShieldAlert, Euro, Clock } from "lucide-react";
import Link from "next/link";

export default function RyanairWizzGoteborg() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Måste Ryanair betala ersättning enligt EU261 även om biljetten var jättebillig?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolut! EU-förordning 261/2004 gäller oavsett vad du betalat för biljetten. Om din flygning med Ryanair eller Wizz Air från Göteborg är mer än 3 timmar försenad (och det inte beror på extraordinära omständigheter) har du rätt till hela beloppet, ofta 250 € eller 400 €, även om biljetten kostade 200 kr."
        }
      },
      {
        "@type": "Question",
        "name": "Hur får jag ersättning om Ryanair hänvisar till sitt irländska huvudkontor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lågprisbolag använder ofta byråkrati som sköld. Du omfattas av EU-lagstiftning oavsett var bolaget har sitt säte, eftersom du flyger från Sverige. Genom att använda tjänster som ClaimWinger slipper du den komplicerade kommunikationen med deras huvudkontor."
        }
      },
      {
        "@type": "Question",
        "name": "Vad gäller vid inställda Wizz Air-flyg från Göteborg?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Om Wizz Air ställer in ditt flyg mindre än 14 dagar före avgång måste de erbjuda ombokning ELLER återbetalning av biljetten, SAMT upp till 400 € i kompensation i form av kontanter (inte Wizz-credits)."
        }
      }
    ]
  };

  return (
    <LayoutSv>
      <SEO 
        title="Ryanair och Wizz Air från Göteborg (GOT) — Rättigheter och Ersättning 2025"
        description="Problem med Ryanair eller Wizz Air från Landvetter? Lär dig dina passagerarrättigheter och tvinga lågprisbolagen att betala EU261-ersättning."
        image="/og-image.png"
        url="https://problemlot.com/sv/blog/ryanair-wizz-air-goteborg-rattigheter"
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
          <span>Lågprisbolag Landvetter</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">💸</span>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Lågprisflyg & Rättigheter
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ryanair och Wizz Air från Göteborg — Tvinga fram din lagliga ersättning
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              11 min läsning
            </span>
            <span>•</span>
            <span>Uppdaterad: 7 mars 2025</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Ryanair och Wizz Air erbjuder fantastiskt billiga resor från Göteborg Landvetter ut i Europa. Men när flygen väl blir försenade eller inställda, upptäcker många passagerare varför de kallas lågprisbolag — kundservicen är ofta obefintlig och de gör allt för att slippa betala <Link href="https://claimwinger.com/sv" className="text-blue-600 hover:underline">ersättning enligt EU-lag</Link>.
          </p>
        </div>

        <Card className="p-8 mb-12 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Ignorerad av Ryanair eller Wizz Air?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Vi tvingar lågprisbolagen att följa lagen. Kolla ditt flyg på 3 minuter — du kan ha rätt till upp till 400 € även om biljetten kostade en bråkdel av det.
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
            Lagen bryr sig inte om biljettpriset
          </h2>
          <p>
            Den absolut vanligaste myten är att man "får vad man betalar för". Det stämmer för benutrymme och bagage, men <strong>INTE</strong> för passagerarrättigheter. EU261-förordningen skyddar dig helt oberoende av biljettens pris.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Ett försenat Ryanair-flyg Göteborg - London (under 1500 km) ger <strong>250 €</strong> i ersättning.</li>
            <li>Ett försenat Wizz Air-flyg Göteborg - Budapest (över 1500 km) ger <strong>400 €</strong> i ersättning.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Typiska fällor från lågprisbolagen
          </h2>
          
          <div className="space-y-6 my-8">
            <Card className="p-6 border-l-4 border-red-600">
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-red-600" />
                Voucher-tricket (Wizz Credits)
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Wizz Air erbjuder ofta 120% av biljettpriset i "Wizz Credits" vid inställda flyg. Vad de inte säger i första hand är att du har laglig rätt att få 100% återbetalat i <strong>kontanter</strong> PLUS en fast EU-kompensation i pengar. Välj alltid cash.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-orange-600">
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-orange-600" />
                Omöjliga kontaktformulär
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Lågprisbolag gör ofta processen medvetet frustrerande med trasiga webbformulär eller kundtjänst-chattbottar som går i loopar. Deras mål är att du ska ge upp.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-blue-600">
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                Undvik fällan - Gör så här på Landvetter
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Samla in dina bevis direkt. Fota ankomst-skärmen. Spara boardingkortet. Anlita sedan professionell hjälp som kan hota med stämning – lågprisbolag betalar sällan förrän de märker att du menar allvar via juridiska ombud.
              </p>
            </Card>
          </div>
        </div>

        <Card className="p-8 my-12 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Låt experterna ta hand om lågprisbolagen
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              ClaimWinger har systemen för att snabbt tvinga Ryanair och Wizz Air att betala den ersättning de är skyldiga dig. Ingen vinst, ingen avgift.
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
              <Link href="https://claimwinger.com/sv">
                Driv Ditt Krav Nu →
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