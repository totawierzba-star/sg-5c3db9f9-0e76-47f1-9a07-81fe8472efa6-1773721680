import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plane, AlertCircle, Clock, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function SASNorwegianGoteborg() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hur får jag pengar istället för CashPoints från Norwegian vid inställt flyg?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Enligt EU261 har du alltid rätt att välja kontant återbetalning till ditt bankkort/konto vid ett inställt flyg. Tacka nej till Norwegians erbjudande om CashPoints i deras e-postutskick och följ instruktionerna för kontant utbetalning, eller anlita en ersättningstjänst för hjälp."
        }
      },
      {
        "@type": "Question",
        "name": "Jag missade min anslutning i Köpenhamn på grund av försenat SAS-flyg från Göteborg, vad händer nu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eftersom du flög med SAS på en genomgående biljett är de ansvariga för hela resan. Om förseningen från Göteborg gjorde att du ankom till din slutdestination (t.ex. London eller New York) mer än 3 timmar sent, har du rätt till upp till 600 € i ersättning."
        }
      },
      {
        "@type": "Question",
        "name": "Ersätter SAS hotell om jag strandas i Göteborg över natten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja. Om flyget blir försenat till nästa dag är SAS juridiskt skyldiga att stå för hotell samt transfer till/från hotellet. Spara kvittot och kräv återbetalning tillsammans med din 250 € EU-kompensation."
        }
      }
    ]
  };

  return (
    <LayoutSv>
      <SEO 
        title="SAS och Norwegian från Göteborg (GOT) — Förseningar & Ersättning"
        description="Har du flugit med SAS eller Norwegian från Landvetter och drabbats av försening? Lär dig hur du kräver EU-ersättning och undviker CashPoints/Vouchers."
        image="/og-image.png"
        url="https://problemlot.com/sv/blog/sas-norwegian-goteborg-forseningar-ersattning"
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
          <span>SAS & Norwegian Landvetter</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">✈️</span>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Flygbolag från Landvetter
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            SAS och Norwegian från Göteborg — Vanligaste förseningarna och din rätt till ersättning
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
            SAS och Norwegian dominerar trafiken från Göteborg Landvetter (GOT), särskilt på pendlarrutterna till Stockholm, Köpenhamn och Oslo, men även ner till Sydeuropa. När dessa nyckelrutter drabbas av förseningar orsakar det ofta missade anslutningar och förstörda planer. Så här säkerställer du att flygbolagen betalar den <Link href="https://claimwinger.com/sv/forsenat-flyg" className="text-blue-600 hover:underline">ersättning du har rätt till enligt EU261</Link>.
          </p>
        </div>

        <Card className="p-8 mb-12 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Problem med SAS eller Norwegian?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Acceptera inga värdecheckar! Du har rätt till upp till 600 € i rena pengar vid förseningar över 3 timmar.
              </p>
            </div>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg whitespace-nowrap">
              <Link href="https://claimwinger.com/sv">
                Få Din Kompensation Nu →
              </Link>
            </Button>
          </div>
        </Card>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Typiska problem med SAS från Landvetter
          </h2>
          <p>
            För resenärer från Göteborg används SAS ofta som matarflyg (feeder) till deras hubbar i Köpenhamn (CPH) och Stockholm (ARN).
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex gap-3">
              <AlertCircle className="w-6 h-6 text-blue-600 shrink-0" />
              <span><strong>Missade anslutningar i Köpenhamn:</strong> Om det korta hoppet GOT-CPH är bara 45 minuter försenat, kan du missa din long-haul anslutning till USA eller Asien. <strong>Regel:</strong> Om båda flygen är på samma bokning och du anländer 3 timmar sent till slutdestinationen, har du rätt till maxersättning på 600 €.</span>
            </li>
            <li className="flex gap-3">
              <AlertCircle className="w-6 h-6 text-blue-600 shrink-0" />
              <span><strong>Tekniska fel på pendlarrutterna:</strong> De frekventa flygningarna till Stockholm ställs ofta in p.g.a. tekniskt underhåll eller "crew shortages". Båda orsakerna ger full rätt till 250 € i kompensation.</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Typiska problem med Norwegian från Landvetter
          </h2>
          <p>
            Norwegian erbjuder en mix av flyg till nordiska huvudstäder och semesterorter i Spanien. Deras vanligaste fällor för passagerare är:
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex gap-3">
              <AlertCircle className="w-6 h-6 text-red-600 shrink-0" />
              <span><strong>"CashPoints"-fällan:</strong> När ett Norwegian-flyg ställs in, skickar de ofta snabbt ut ett mail som erbjuder ersättning i "CashPoints". <strong>Gå inte i fällan.</strong> EU-lag garanterar att du får kontanter. Klickar du acceptera poäng, avsäger du dig ofta dina lagliga rättigheter.</span>
            </li>
            <li className="flex gap-3">
              <AlertCircle className="w-6 h-6 text-red-600 shrink-0" />
              <span><strong>Tighta tidsscheman (Turnarounds):</strong> Norwegians plan är ständigt i luften. En liten försening på morgonen från Alicante växer sig ofta enorm innan planet ska lyfta tillbaka från Landvetter på kvällen. Du har rätt till ersättning!</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Hur man vinner över flygbolagen
          </h2>
          <p>
            Både SAS och Norwegian har stora juridiska avdelningar vars jobb är att avslå så många krav som möjligt på första försöket, ofta genom att hävda "oväder" eller "strejk" även när det inte stämmer helt överens med sanningen.
          </p>
          <p>
            För att vinna krävs det att man kan presentera väderdata, flygledningsprotokoll och prejudicerande domar. Det är därför över 90% av de som driver ärenden själva ger upp efter första avslaget.
          </p>
        </div>

        <Card className="p-8 my-12 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Låt ClaimWinger ta fighten med SAS & Norwegian
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Våra jurister vet exakt vilka ursäkter flygbolagen använder, och vi vet hur man motbevisar dem. Vi tar risken — no win, no fee.
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
              <Link href="https://claimwinger.com/sv">
                Få dina pengar nu →
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