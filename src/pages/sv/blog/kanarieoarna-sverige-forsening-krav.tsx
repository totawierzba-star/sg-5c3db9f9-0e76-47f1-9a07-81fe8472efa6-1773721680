import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ShieldAlert, Clock, Plane } from "lucide-react";
import Link from "next/link";

export default function KanarieoarnaForsening() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Vilken ersättningsnivå gäller för flyg till Kanarieöarna?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Avståndet mellan Sverige och Kanarieöarna är över 3 500 km. Vanligtvis ger det 600 €, men eftersom Gran Canaria/Teneriffa tillhör Spanien (som är ett EU-land), tillämpas ett undantag i EU261 för resor INOM EU över 3 500 km. Din maxersättning blir därför begränsad till 400 € per passagerare vid en försening över 3 timmar."
        }
      },
      {
        "@type": "Question",
        "name": "Vad gäller vid Calima (sandstorm) på Kanarieöarna?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Calima (täta sandstormar från Sahara) sänker sikten dramatiskt och tvingar ofta flygplatserna att stänga. Detta klassas som 'extraordinära omständigheter', varvid rätten till 400 € fryser inne. Du har dock alltid rätt till mat och hotell under förseningen."
        }
      },
      {
        "@type": "Question",
        "name": "Hur hanterar jag inställda charterflyg till Gran Canaria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Även charterflyg faller under EU-förordning 261/2004. Om resebolagets flyg (t.ex. Sunclass eller TUI fly) försenas kraftigt eller ställs in, ställer du kravet mot flygbolaget för 400 €."
        }
      }
    ]
  };

  return (
    <LayoutSv>
      <SEO 
        title="Försening till Kanarieöarna? Så Kräver du Ersättning"
        description="Har flyget till Gran Canaria eller Teneriffa blivit försenat? Lär dig hur du kräver EU-ersättning (upp till 400 €) för din semesterresa."
        image="/og-image.png"
        url="https://problemlot.com/sv/blog/kanarieoarna-sverige-forsening-krav"
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
          <span>Kanarieöarna Försening</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">☀️</span>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Semesterflyg
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Flygningar från Sverige till Kanarieöarna — Säsongsförseningar och dina krav
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              10 min läsning
            </span>
            <span>•</span>
            <span>Uppdaterad: 7 mars 2025</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Gran Canaria, Teneriffa och Fuerteventura är svenskarnas största vinterfavoriter. Varje vecka lyfter dussintals flyg från Sverige. När resan hit (som tar cirka 6 timmar) blir försenad eller ställs in är det bra att veta att <Link href="https://claimwinger.com/sv" className="text-blue-600 hover:underline">EU-förordning 261/2004</Link> ger dig rätten till omedelbar ekonomisk ersättning.
          </p>
        </div>

        <Card className="p-8 mb-12 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Problem med flyget till solen?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Få upp till 400 € per person. Våra experter på ClaimWinger tar fajten mot flygbolaget — utan någon ekonomisk risk för dig.
              </p>
            </div>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg whitespace-nowrap">
              <Link href="https://claimwinger.com/sv/forsenat-flyg">
                Kontrollera Ersättning →
              </Link>
            </Button>
          </div>
        </Card>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Ersättningsgränsen: Varför du får 400 € och inte 600 €
          </h2>
          <p>
            Många passagerare räknar ut att sträckan från Sverige till Kanarieöarna är över 3 500 km och förväntar sig den maximala EU-ersättningen på 600 €. 
          </p>
          <p>
            Det finns dock en <strong>specialregel i EU261</strong>: Om din flygning sker helt inom den Europeiska Unionens gränser (Kanarieöarna tillhör Spanien, ett EU-land), är ersättningen begränsad (cappad) till <strong>400 € per person</strong> för flygningar över 1 500 km, oavsett hur lång sträckan faktiskt är. Du får alltså 400 € (ca 4 500 kr) vid försening över 3 timmar.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Vanliga orsaker till förseningar
          </h2>
          <div className="space-y-6 my-8">
            <Card className="p-6 border-l-4 border-yellow-600">
              <h4 className="font-bold text-lg mb-2">Crew shortages och intensiva scheman</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Både reguljära bolag (Norwegian, Ryanair) och charterbolag (Sunclass, TUI) utnyttjar sina flygplan maximalt. Om planet blir försenat tidigt på dagen uppstår ofta dominoförseningar. Du har <strong>rätt till ersättning</strong> i dessa fall.
              </p>
            </Card>
            <Card className="p-6 border-l-4 border-red-600">
              <h4 className="font-bold text-lg mb-2">Väderfenomenet Calima</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Sandstormar från Sahara stänger ibland öarnas flygplatser. Detta är ett verkligt extremväder och räknas som <strong>extraordinära omständigheter</strong>. Ingen skadeståndsersättning utgår, men du har absolut rätt till <strong>hotell, mat och dryck</strong>. Spara kvitton!
              </p>
            </Card>
          </div>
        </div>

        <Card className="p-8 my-12 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Redo att kräva det som är ditt?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Ge inte upp för flygbolagens standard-avslag. Vi på ClaimWinger kontrollerar ärendet juridiskt och tar det till domstol om nödvändigt.
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
              <Link href="https://claimwinger.com/sv">
                Få Min Ersättning Tryggt →
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