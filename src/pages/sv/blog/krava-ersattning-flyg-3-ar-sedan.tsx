import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, HelpCircle, History, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function KravaErsattningFlygTreAr() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Kan jag kräva ersättning för ett flyg för 3 år sedan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja. Enligt den svenska preskriptionslagen har du hela tre (3) år på dig att kräva ersättning från den dag då flygningen ägde rum. Vissa andra europeiska länder har ännu längre preskriptionstider, till exempel Storbritannien där det är 6 år."
        }
      },
      {
        "@type": "Question",
        "name": "Måste jag ha kvar boardingkortet från ett gammalt flyg?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Att ha pappersboardingkortet är bra men absolut inget krav. Det räcker oftast med bokningsbekräftelsen i din e-post (med PNR/bokningsnummer) och ditt pass för att bevisa att du köpt biljetten och bokat flyget."
        }
      },
      {
        "@type": "Question",
        "name": "Kan flygbolaget vägra betala för att det gått för lång tid?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nej, så länge du inkommer med ditt krav inom preskriptionstiden (exempelvis 3 år för flyg från Sverige) har de ingen juridisk rätt att neka ditt ärende baserat på tidsfaktorn."
        }
      }
    ]
  };

  return (
    <LayoutSv>
      <SEO 
        title="Kan jag kräva ersättning för ett flyg för 3 år sedan? | Preskription"
        description="Få reda på exakt hur gamla flygningar du kan kräva ersättning för. I Sverige och EU gäller olika preskriptionstider. Läs vår guide!"
        image="/og-image.png"
        url="https://problemlot.com/sv/blog/krava-ersattning-flyg-3-ar-sedan"
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
          <span>Ersättning flyg preskription Sverige</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Kan jag kräva ersättning för ett flyg för 3 år sedan?
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1"><History className="w-4 h-4" /> 4 min läsning</span>
            <span>•</span>
            <span className="text-purple-600 font-semibold">Juridisk preskriptionstid</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl text-gray-700 dark:text-gray-300 font-medium bg-purple-50 dark:bg-purple-950 p-6 rounded-lg border-l-4 border-purple-600">
            <strong>Snabbt svar:</strong> <strong>Ja!</strong> I Sverige är preskriptionstiden för anspråk om flygersättning (EU261) hela <strong>3 år</strong>. Det betyder att du i efterhand kan plocka ut upp till 600 € för ett flyg som var kraftigt försenat eller ställdes in flera år tillbaka i tiden.
          </p>
        </div>

        {/* CTA 1 */}
        <Card className="p-8 mb-12 bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-purple-950 dark:to-indigo-900 border-purple-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Hade du en gammal flygförsening?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Sök igenom din mail efter gamla bokningar. Mata in flightnumret hos oss — det tar bara 2 minuter att se om pengarna väntar på dig.
              </p>
            </div>
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg w-full md:w-auto">
              <Link href="https://claimwinger.com/sv">
                Testa ett gammalt flyg nu →
              </Link>
            </Button>
          </div>
        </Card>

        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold mt-8 mb-4">Olika tidsgränser i Europa</h2>
          <p>
            Preskriptionstiden för EU261 styrs av landets nationella lagstiftning, vanligtvis utifrån antingen flygbolagets hemland eller avreselandet.
          </p>
          <ul>
            <li><strong>Sverige, Danmark, Norge:</strong> 3 år.</li>
            <li><strong>Tyskland, Österrike:</strong> 3 år (räknat från årets slut).</li>
            <li><strong>Frankrike, Spanien:</strong> 5 år.</li>
            <li><strong>Storbritannien (UK261):</strong> 6 år.</li>
          </ul>

          <p>
            <em>Ett exempel:</em> Om du flög med SAS från Arlanda till London den 10 april 2022 och blev 4 timmar försenad, har du till och med den 9 april 2025 på dig att lämna in ditt ärende!
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg my-6 flex gap-4">
            <AlertCircle className="w-8 h-8 text-yellow-600 flex-shrink-0" />
            <p className="m-0 text-sm">
              Ju äldre flyget är, desto svårare kan flygbolaget ha att presentera bevis för eventuella "extraordinära omständigheter". Det gör faktiskt ofta din rättsliga position ännu starkare om du anlitar ett ombud!
            </p>
          </div>
        </div>

        {/* CTA 2 (Przed FAQ) */}
        <div className="bg-blue-50 dark:bg-blue-950/30 p-8 rounded-2xl text-center mb-12 border border-blue-100 dark:border-blue-900">
          <History className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Låt pengarna inte brinna inne</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Hitta ditt gamla PNR/bokningsnummer och låt ClaimWinger driva processen innan preskriptionstiden går ut.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            <Link href="https://claimwinger.com/sv">
              Kräv pengar för ett gammalt flyg
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
              <h3 className="font-bold text-lg mb-2">Kan jag kräva ersättning för ett flyg för 3 år sedan?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Ja. I Sverige (samt Danmark och Norge) är preskriptionstiden för flygkrav precis 3 år från dagen flygningen var planerad.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Måste jag ha kvar boardingkortet från ett gammalt flyg?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nej. Så länge du har kvar din bokningsbekräftelse med bokningsnummer (PNR) via mejl kan vi verifiera att du befann dig på planet.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Kan flygbolaget vägra betala för att det gått för lång tid?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nej. Lagen är tydlig; lämnar du in kravet innan 3 år har passerat så måste bolaget hantera ditt fall enligt EU-rätt. Tiden utgör ingen legal ursäkt.
              </p>
            </Card>
          </div>
        </section>
      </article>
    </LayoutSv>
  );
}
