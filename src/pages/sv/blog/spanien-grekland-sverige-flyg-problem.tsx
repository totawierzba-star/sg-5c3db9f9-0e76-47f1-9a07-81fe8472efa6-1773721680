import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, MapPin, Clock, ShieldAlert } from "lucide-react";
import Link from "next/link";

export default function SpanienGreklandFlygProblem() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Ger strejk i Spanien eller Grekland rätt till ersättning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Det beror på vem som strejkar. Om flygbolagets egen personal (t.ex. Ryanairs piloter) strejkar, har du rätt till 400 €. Om det däremot är franska eller spanska flygledare (ATC) som strejkar, klassas detta som extraordinära omständigheter och ingen ersättning betalas ut."
        }
      },
      {
        "@type": "Question",
        "name": "Hur mycket ersättning får jag för flyg till Sydeuropa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Avståndet mellan Sverige och resmål som Malaga, Mallorca, Aten eller Kreta ligger oftast mellan 1 500 km och 3 500 km. Vid försening över 3 timmar är din lagliga kompensation därför 400 € per passagerare."
        }
      },
      {
        "@type": "Question",
        "name": "Jag blev ombokad av SAS från Stockholm till Aten och anlände 4 timmar sent. Får jag pengar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja. Enligt EU261 innebär en ankomstförsening på över 3 timmar att du har rätt till full ersättning (400 €), förutsatt att orsaken var inom flygbolagets kontroll (t.ex. tekniskt fel eller personalbrist)."
        }
      }
    ]
  };

  return (
    <LayoutSv>
      <SEO 
        title="Flyg mellan Sverige och Spanien/Grekland — Dina Ersättningskrav"
        description="Vanliga problem med flyg från Sverige till Spanien och Grekland. Lär dig hur du kräver in 400 € i ersättning för förseningar och inställda flyg."
        image="/og-image.png"
        url="https://problemlot.com/sv/blog/spanien-grekland-sverige-flyg-problem"
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
          <span>Flyg till Sydeuropa</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🇪🇸 🇬🇷</span>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Mest Traffikerade Semesterrutterna
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Flygningar Sverige–Spanien och Grekland — Vanligaste problemen och din ersättning
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
            Spanien (med Malaga, Alicante och Mallorca i spetsen) samt Grekland (Aten, Kreta, Rhodos) är de odiskutabelt mest populära sommardestinationerna för svenskar. Högtrycket i det europeiska luftrummet under sommarmånaderna leder dock ofta till massiva förseningar. Med hjälp av <Link href="https://claimwinger.com/sv" className="text-blue-600 hover:underline">EU-direktiv 261/2004</Link> kan du kräva upp till <strong>400 € i ersättning</strong> vid förseningar över 3 timmar.
          </p>
        </div>

        <Card className="p-8 mb-12 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Blev Sydeuropa-resan försenad?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Du har ofta rätt till 400 € (ca 4 500 kr) oavsett biljettpris. Låt experter granska ditt flyg gratis.
              </p>
            </div>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg whitespace-nowrap">
              <Link href="https://claimwinger.com/sv/forsenat-flyg">
                Kontrollera Ersättning Gratis →
              </Link>
            </Button>
          </div>
        </Card>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            De vanligaste fällorna under sommaren
          </h2>
          <p>
            Under semesterperioden pressas hela det europeiska flygsystemet till bristningsgränsen. Flygbolagen använder dessa omständigheter som ursäkt för att slippa betala passagerare, men domstolar dömer ofta till resenärens fördel i följande fall:
          </p>
          
          <ul className="space-y-4 mb-8">
            <li className="flex gap-3">
              <ShieldAlert className="w-6 h-6 text-red-600 shrink-0" />
              <span><strong>Slot-tider och luftrumstockning:</strong> Ofta påstår flygbolaget att flygledningen (ATC) försenat dem. Om förseningen i grunden berodde på att bolaget planerat för snäva tidsscheman ("turnarounds"), är detta deras ansvar och du kan kräva ersättning.</span>
            </li>
            <li className="flex gap-3">
              <ShieldAlert className="w-6 h-6 text-red-600 shrink-0" />
              <span><strong>Tekniska problem vid hög värme:</strong> Flygbolagen är skyldiga att underhålla planen. Fel på luftkonditionering eller elektronik utgör INTE 'extraordinära omständigheter', vilket garanterar dina 400 €.</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            ATC-strejker i Frankrike
          </h2>
          <p>
            Ett mycket specifikt och frustrerande problem för svenska resenärer på väg till Spanien är franska flygledarstrejker. Även om du inte landar i Frankrike måste planet flyga <em>över</em> franskt luftrum.
          </p>
          <p>
            <strong>Juridiskt läge:</strong> När flyg försenas på grund av att franska flygledare (ATC) strejkar är detta utanför bolagets (t.ex. Norwegians eller Ryanairs) kontroll. <strong>Ingen ersättning</strong> (400 €) betalas ut, MEN bolaget måste oavsett detta bjuda på hotell, mat och dryck tills du kommit fram.
          </p>
        </div>

        <Card className="p-8 my-12 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Låt ClaimWinger utvärdera ursäkten
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Flygbolag försöker ofta kalla alla förseningar för "ATC-problem" eller "väder". Vi slår upp meteorologiska data och bevisar ifall de ljuger, så att du får dina 400 €.
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
              <Link href="https://claimwinger.com/sv">
                Hämta Din Kompensation Nu →
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