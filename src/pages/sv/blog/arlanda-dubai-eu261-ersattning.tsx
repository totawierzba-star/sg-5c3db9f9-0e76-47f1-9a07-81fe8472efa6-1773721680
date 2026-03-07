import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, Clock, Plane, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function ArlandaDubaiErsattning() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hur mycket ersättning får jag vid försening till Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Avståndet mellan Arlanda och Dubai är cirka 4 700 km, vilket innebär maxersättning på 600 € enligt EU261, förutsatt att du är mer än 3 timmar försenad vid ankomst."
        }
      },
      {
        "@type": "Question",
        "name": "Får jag ersättning om Emirates är försenat från Dubai till Arlanda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nej. Eftersom Emirates är ett icke-EU-flygbolag och avgår från ett land utanför EU (Dubai), är flygningen TILL Arlanda inte täckt av EU-förordning 261/2004."
        }
      },
      {
        "@type": "Question",
        "name": "Gäller EU261 för Norwegian från Arlanda till Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja. Det gäller eftersom flyget avgår från en flygplats i Sverige (EU). Hade du dessutom flugit hem med Norwegian (ett europeiskt bolag), hade du även varit skyddad på hemresan från Dubai till Arlanda."
        }
      },
      {
        "@type": "Question",
        "name": "Om jag flyger via Dubai med Emirates till Thailand och Arlanda-Dubai är försenat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eftersom din resa började på Arlanda (EU) täcks hela resan av EU261, även om förseningen inträffar på din anslutning i Dubai. Kommer du mer än 3 timmar sent till slutdestinationen i Thailand, har du rätt till 600 €."
        }
      }
    ]
  };

  return (
    <LayoutSv>
      <SEO 
        title="Arlanda till Dubai försenat? När gäller EU261 för Mellanösternflyg"
        description="Emirates eller Norwegian försenat mellan Stockholm och Dubai? Lär dig exakt när du kan kräva 600 € i ersättning enligt EU-lag."
        image="/og-image.png"
        url="https://problemlot.com/sv/blog/arlanda-dubai-eu261-ersattning"
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
          <span>Arlanda – Dubai Ersättning</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🐪</span>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Flygningar till Mellanöstern
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Arlanda till Dubai — När gäller EU261 på Mellanöstern-flyg?
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
            Dubai är en favoritdestination för svenskar under vinterhalvåret och en kritisk transferhubb för resor vidare mot Asien. Om du flyger mellan Stockholm Arlanda och Dubai och råkar ut för en försening på mer än 3 timmar ligger hela <strong>600 € (över 6 800 kr)</strong> i potten. Men reglerna skiljer sig radikalt beroende på riktningen och vilket flygbolag du reser med!
          </p>
        </div>

        <Card className="p-8 mb-12 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Har ditt flyg till/från Dubai blivit försenat?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Oavsett om det var Emirates eller Norwegian – kolla direkt om flyget täcks av europeisk lagstiftning.
              </p>
            </div>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg whitespace-nowrap">
              <Link href="https://claimwinger.com/sv/forsenat-flyg">
                Kontrollera din rättighet →
              </Link>
            </Button>
          </div>
        </Card>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Den avgörande skillnaden: Emirates vs. Norwegian
          </h2>
          <p>
            Det viktigaste att veta när man pratar om <Link href="https://claimwinger.com/sv" className="text-blue-600 hover:underline">EU-förordning 261/2004</Link> och flygningar utanför Europa är att flygbolagets hemland styr över dina rättigheter på hemresan. Låt oss bryta ned det:
          </p>

          <Card className="p-6 my-8 border-l-4 border-green-600">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              Sverige (Arlanda) ➔ Dubai (ALLA flygbolag)
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Avgår du från Arlanda gäller <strong>alltid EU-regler</strong>. Det spelar ingen roll om du flyger Emirates, Qatar Airways eller Norwegian. Är du mer än 3 timmar sen vid ankomst har du rätt till 600 €.
            </p>
          </Card>

          <Card className="p-6 my-8 border-l-4 border-red-600">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              Dubai ➔ Sverige (Arlanda)
            </h3>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300 mt-4">
              <li className="flex gap-2">
                <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                <span><strong>Icke-EU-bolag (t.ex. Emirates):</strong> Flyger du hem från Dubai med Emirates och flyget blir försenat har du <strong>INTE rätt till ersättning enligt EU261</strong>, eftersom planet startar utanför EU och flygbolaget inte är europeiskt.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                <span><strong>EU-bolag (t.ex. Norwegian):</strong> Reser du hem med Norwegian eller Lufthansa är du fullt skyddad, även om flyget avgår från Dubai. Rätt till 600 € gäller.</span>
              </li>
            </ul>
          </Card>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Anslutningsflyg i Dubai (Emirates-hubb)
          </h2>
          <p>
            Många svenskar använder Arlanda - Dubai som första etapp mot Asien eller Australien på en sammanhängande Emirates-biljett. 
          </p>
          <p>
            Om ditt första flyg (Arlanda till Dubai) är försenat så att du missar anslutningen i Dubai och kommer fram till t.ex. Bangkok mer än 3 timmar sent, <strong>har du rätt till ersättning (600 €)</strong>. Detta har bekräftats i flera domar i EU-domstolen: så länge din resa inleddes i ett EU-land, täcker lagstiftningen hela bokningen fram till slutmålet.
          </p>
        </div>

        <Card className="p-8 my-12 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Osäker på om ditt flyg täcks av EU261?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Flygbolag från Mellanöstern är kända för att vara tuffa i förhandlingar. Vi vet exakt vilken lagstiftning som gäller och kämpar för dina pengar utan risk (no-win-no-fee).
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
              <Link href="https://claimwinger.com/sv">
                Få Din Ersättning Idag →
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