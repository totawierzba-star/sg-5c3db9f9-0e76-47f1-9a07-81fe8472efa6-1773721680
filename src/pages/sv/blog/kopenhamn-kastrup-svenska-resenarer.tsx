import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, ShieldAlert, Train, Plane } from "lucide-react";
import Link from "next/link";

export default function KastrupSvenskaResenarer() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Om mitt flyg blir inställt på Kastrup, måste flygbolaget betala min tågbiljett hem till Skåne?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Din rätt till ombokning och assistans gäller transporten till den flygplats som står på biljetten. Om din biljett slutade på CPH Kastrup är det din slutdestination. Flygbolaget är generellt inte skyldiga att bekosta din vidare transport över bron till Sverige, men du har rätt till ersättningen på upp till 600 € för flygets försening."
        }
      },
      {
        "@type": "Question",
        "name": "Ska jag ansöka om ersättning enligt svensk eller dansk lag om flyget gick från CPH?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lagstiftningen (EU261/2004) är gemensam för hela EU, alltså både Sverige och Danmark. Ersättningen och dina rättigheter är exakt desamma. Du kan använda en ersättningstjänst som hanterar krav över hela EU oavsett avreseland."
        }
      },
      {
        "@type": "Question",
        "name": "Jag hade en flygbiljett bokad från Göteborg med byte på Kastrup, men flyget från GOT var försenat. Vem är ansvarig?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Det flygbolag som orsakade den initiala förseningen (från Göteborg) är ansvarigt. Om du har hela resan på ett och samma bokningsnummer (PNR) har du rätt till upp till 600 € (beroende på slutdestinationen) om du anlände mer än 3 timmar försenad till sista stoppet."
        }
      }
    ]
  };

  return (
    <LayoutSv>
      <SEO 
        title="Kastrup (CPH) som hub för svenskar — Rättigheter vid försening"
        description="Sydsveriges främsta flygplats ligger i Danmark. Lär dig vilka EU-regler som gäller när du flyger från Kastrup (CPH) och drabbas av förseningar."
        image="/og-image.png"
        url="https://problemlot.com/sv/blog/kopenhamn-kastrup-svenska-resenarer"
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
          <span>Kastrup (CPH) för svenskar</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🇩🇰</span>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Köpenhamn Kastrup (CPH)
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Köpenhamn Kastrup som hub för svenska resenärer — Rättigheter vid försening
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
            För invånare i Skåne och södra Sverige är <strong>Köpenhamn Kastrup (CPH)</strong> den absolut viktigaste flygplatsen för internationella resor. Oavsett om du tar Öresundståget dit eller har ett anslutningsflyg från Stockholm eller Göteborg, är det viktigt att veta hur gränsöverskridande resor påverkar dina <Link href="https://claimwinger.com/sv/forsenat-flyg" className="text-blue-600 hover:underline">EU-rättigheter vid förseningar</Link>.
          </p>
        </div>

        <Card className="p-8 mb-12 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Fastnade du på Kastrup?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Lämna inte pengarna till flygbolaget. Gör en gratis bedömning och se om du har rätt till upp till 600 € (ca 6 800 kr).
              </p>
            </div>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg whitespace-nowrap">
              <Link href="https://claimwinger.com/sv">
                Kontrollera Ersättning Gratis →
              </Link>
            </Button>
          </div>
        </Card>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            EU-lagstiftning gör gränsen osynlig
          </h2>
          <p>
            Eftersom både Danmark och Sverige är medlemmar i EU omfattas Kastrup fullt ut av EU-förordning 261/2004. Skyddsnätet är identiskt med det du upplever på Arlanda eller Landvetter.
          </p>
          <p>
            Om ditt flyg ut från Köpenhamn försenas mer än 3 timmar till slutdestinationen, eller om det ställs in med kort varsel (och det inte beror på extraordinära omständigheter), har du rätt till kompensation enligt följande nivåer:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li><strong>250 €</strong> för flyg inom Europa (upp till 1 500 km).</li>
            <li><strong>400 €</strong> för längre flyg inom Europa (över 1 500 km).</li>
            <li><strong>600 €</strong> för långdistansflyg till t.ex. USA, Asien (över 3 500 km).</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Missade anslutningar via CPH
          </h2>
          <p>
            SAS har en av sina absolut största hubbar på Kastrup. Det innebär att tusentals svenskar flyger rutten Stockholm–Köpenhamn eller Göteborg–Köpenhamn för att sedan resa vidare ut i världen.
          </p>
          <Card className="p-6 my-6 border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-950/30">
            <h3 className="font-bold text-lg mb-2">Den gyllene regeln vid byten (Gemensam Bokning):</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Om du har bokat resan <strong>på ett och samma biljettnummer (PNR)</strong> och det första flyget (från t.ex. Göteborg) är så pass försenat att du missar bytet i Köpenhamn, är SAS (eller opererande bolag) skyldiga att:
              <br/><br/>
              1. Boka om dig till destinationen gratis.<br/>
              2. Ordna mat och eventuellt hotell under väntetiden i Köpenhamn.<br/>
              3. Betala ut ersättning på upp till 600 € <em>baserat på distansen till din slutdestination</em>, förutsatt att du kom fram 3 timmar sent.
            </p>
          </Card>
          
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            Varning för Self-Transfer
          </h3>
          <p>
            Om du bygger din egen resa genom att köpa en tågbiljett till Kastrup eller en separat flygbiljett med Norwegian, och sedan flyger vidare med ett annat bolag på en <em>separat bokning</em>, tar EU-skyddet slut vid första benet. Missar du det andra flyget måste du köpa en helt ny biljett ur egen ficka. Undvik "self-transfer" om du inte har goda tidsmarginaler.
          </p>
        </div>

        <Card className="p-8 my-12 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Vill du ha en stressfri ersättningsprocess?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Flygbolagens jurister hanterar hundratals krav per dag. ClaimWinger står på passagerarens sida, vi verifierar flygdata och kräver in beloppet enligt EU-lagstiftning – du betalar endast om vi lyckas.
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
              <Link href="https://claimwinger.com/sv/installat-flyg">
                Driv ditt ärende nu →
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