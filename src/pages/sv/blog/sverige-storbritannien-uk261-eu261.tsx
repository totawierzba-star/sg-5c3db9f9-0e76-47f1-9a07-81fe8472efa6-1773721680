import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, MapPin, Clock, Plane } from "lucide-react";
import Link from "next/link";

export default function SverigeStorbritannienBrexit() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Gäller EU-regler fortfarande för flyg till England?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja. Alla flyg som lyfter från ett EU-land (Sverige) skyddas automatiskt av EU261. Det spelar ingen roll om landet du landar i har lämnat EU eller vilket flygbolag du reser med."
        }
      },
      {
        "@type": "Question",
        "name": "Hur får jag ersättning om British Airways är försenade från Heathrow till Arlanda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eftersom British Airways är ett brittiskt (icke-EU) flygbolag och du lyfter från London (icke-EU), täcks du av Storbritanniens egen lag UK261. Den ger samma rättigheter och du kan kräva £220 (motsvarande 250 €)."
        }
      },
      {
        "@type": "Question",
        "name": "Kan jag kräva både EU261 och UK261 för samma flygning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nej. Lagstiftningen förhindrar dubbel kompensation. Men du förlorar aldrig skyddet – du är alltid täckt av den ena eller den andra lagen för flygningar mellan Sverige och Storbritannien."
        }
      }
    ]
  };

  return (
    <LayoutSv>
      <SEO 
        title="Flyg Sverige–Storbritannien — UK261 vs EU261 efter Brexit"
        description="Orolig över dina passagerarrättigheter efter Brexit? Lär dig hur du får 250 € / £220 i ersättning för försenade flyg mellan Sverige och Storbritannien."
        image="/og-image.png"
        url="https://problemlot.com/sv/blog/sverige-storbritannien-uk261-eu261"
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
          <span>Sverige till UK (Brexit)</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🇬🇧</span>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Storbritannien / Brexit
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Sverige–Storbritannien — UK261 vs EU261 efter Brexit för svenska resenärer
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              9 min läsning
            </span>
            <span>•</span>
            <span>Uppdaterad: 7 mars 2025</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            När Storbritannien röstade för Brexit befarade många passagerare att de robusta europeiska flygrättigheterna skulle försvinna. Sanningen är att ditt skydd har bevarats i form av UK261, vilket är nästan en exakt kopia av <Link href="https://claimwinger.com/sv" className="text-blue-600 hover:underline">EU261/2004</Link>. Om ditt flyg till eller från London ställs in, har du fortfarande rätt till full ersättning (mellan 250 € och £220).
          </p>
        </div>

        <Card className="p-8 mb-12 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Problem med flyget till/från UK?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Vi navigerar det juridiska regelverket åt dig, oavsett om kravet faller under EU- eller UK-lagstiftning.
              </p>
            </div>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg whitespace-nowrap">
              <Link href="https://claimwinger.com/sv/installat-flyg">
                Starta Krav Nu →
              </Link>
            </Button>
          </div>
        </Card>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Hur lagarna korsar varandra
          </h2>
          <p>
            Eftersom resan involverar ett EU-land (Sverige) och ett icke-EU-land (Storbritannien) är det reseriktningen och flygbolagets nationalitet som avgör vilken lag som tillämpas:
          </p>
          
          <ul className="space-y-4 mb-8">
            <li className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
              <span><strong>Från Sverige ➔ UK (T.ex. Arlanda till Heathrow):</strong> Täcks ALLTID av EU261, oavsett om bolaget är SAS eller British Airways. Du kan kräva 250 €.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
              <span><strong>Från UK ➔ Sverige (med EU-bolag, ex. SAS/Norwegian):</strong> Täcks av både EU261 och UK261. Du kan välja vilken du åberopar, men kompensationen är identisk i värde (250 € eller £220).</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-orange-600 shrink-0" />
              <span><strong>Från UK ➔ Sverige (med UK-bolag, ex. British Airways):</strong> Täcks ENBART av UK261. Rättigheterna är desamma, och du ska kräva summan £220.</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Inga ursäkter
          </h2>
          <p>
            Många flygbolags kundtjänst (särskilt brittiska lågprisaktörer) kan vara förvirrande efter Brexit och ofta avslås krav per automatik med en vag hänvisning till ändrad lagstiftning. Du har alltid rätt till mat, övernattning och kontantersättning om förseningen inte beror på 'extraordinära omständigheter'. Låt inte byråkratin hindra dig!
          </p>
        </div>

        <Card className="p-8 my-12 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Vill du slippa pappersarbetet?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              ClaimWinger vet exakt vilken paragraf som ska åberopas i UK och EU. Vi tar fajten, du får betalt.
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
              <Link href="https://claimwinger.com/sv">
                Få Min Ersättning Idag →
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