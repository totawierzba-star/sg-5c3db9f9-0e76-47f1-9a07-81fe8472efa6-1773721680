import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, HelpCircle, CalendarDays, Banknote } from "lucide-react";
import Link from "next/link";

export default function HurLangTidFlygersattning() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hur lång tid tar det att få flygersättning utbetald?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I genomsnitt tar det 4 till 8 veckor att få flygersättningen utbetald om du använder professionella tjänster eller om flygbolaget inte bestrider kravet. Om fallet är komplicerat och måste avgöras i rätten kan processen dock dröja från flera månader upp till över ett år."
        }
      },
      {
        "@type": "Question",
        "name": "Varför dröjer flygbolaget med att betala min ersättning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Flygbolagen har ofta långa handläggningstider av administrativa skäl, men det är också en taktik. Genom att ignorera eller dröja med svar hoppas de att resenären ska ge upp sitt krav på kompensation."
        }
      },
      {
        "@type": "Question",
        "name": "Finns det en specifik tidsgräns inom vilken flygbolag måste svara?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EU261-förordningen sätter tyvärr ingen strikt deadline för när utbetalningen ska finnas på kontot. Praxis enligt nationella regler och tillsynsmyndigheter är dock att flygbolaget bör ge dig ett svar inom 1 till 2 månader från att du lämnat in kravet."
        }
      }
    ]
  };

  return (
    <LayoutSv>
      <SEO 
        title="Hur lång tid tar det att få flygersättning utbetald? | Tidslinje"
        description="Väntar du på dina pengar för ett försenat flyg? Så här lång tid tar det normalt att få utbetalningen för flygersättning enligt vår senaste statistik."
        image="/og-image.png"
        url="https://problemlot.com/sv/blog/hur-lang-tid-flygersattning-utbetald"
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
          <span>Hur lång tid flygersättning</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Hur lång tid tar det att få flygersättning utbetald?
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 4 min läsning</span>
            <span>•</span>
            <span className="text-blue-600 font-semibold">Tidslinje & Fakta</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl text-gray-700 dark:text-gray-300 font-medium bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-gray-400">
            <strong>Snabbt svar:</strong> Den normala väntetiden för att få flygersättning är <strong>4 till 8 veckor</strong> när du har rätt handlingar. Om flygbolaget konstrar och ärendet går vidare till domstol, kan det tyvärr dröja 6–12 månader.
          </p>
        </div>

        {/* CTA 1 */}
        <Card className="p-8 mb-12 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 border-green-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Trött på att vänta på svar?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Vi har advokater som snabbar på processen. Låt oss driva ditt fall — vi vinner ofta på bara några veckor.
              </p>
            </div>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg w-full md:w-auto">
              <Link href="https://claimwinger.com/sv">
                Få hjälp att snabba på kravet →
              </Link>
            </Button>
          </div>
        </Card>

        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold mt-8 mb-4">Varför tar processen tid?</h2>
          <p>
            Oavsett om det rör sig om SAS, Norwegian eller Ryanair så bygger hela affärsmodellen kring kompensationer delvis på att resenären ska ledsna och ge upp. 
          </p>
          <p>
            Förloppet påverkas generellt av tre faktorer:
          </p>
          <ol>
            <li><strong>Flygbolagets backlog:</strong> Under sommar eller efter stora väderkaos får bolagen tusentals ärenden samtidigt, vilket drar ut på tiden.</li>
            <li><strong>Dina bevis:</strong> Om du saknar bokningsnummer, passkopior eller exakta bevis för förseningen dröjer handläggningen.</li>
            <li><strong>Rättslig tvist:</strong> Om flygbolaget hävdar "extraordinära omständigheter" och vägrar betala måste man ibland hota med stämning eller ta fallet till rätten, vilket adderar månader.</li>
          </ol>

          <h3 className="text-2xl font-bold mt-6 mb-3">Tidslinje med ett ombud vs På egen hand</h3>
          <p>
            Om du driver ärendet på egen hand via bolagets webbsida är snittsvarstiden idag 6-10 veckor – ibland svarar de inte alls. Om du däremot använder <strong>ClaimWinger</strong> tas ärendet mer seriöst från start och de juridiska hoten är verkliga, vilket ofta får bolagen att betala ut inom 3-6 veckor.
          </p>
        </div>

        {/* CTA 2 (Przed FAQ) */}
        <div className="bg-blue-50 dark:bg-blue-950/30 p-8 rounded-2xl text-center mb-12 border border-blue-100 dark:border-blue-900">
          <Banknote className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Få dina 600 € snabbare</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Slipp det byråkratiska krånglet. Gör en kostnadsfri ansökan nu så sätter våra experter press på flygbolaget direkt.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            <Link href="https://claimwinger.com/sv">
              Påbörja din process gratis
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
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><CalendarDays className="w-5 h-5"/> Hur lång tid tar det att få flygersättning utbetald?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Genomsnittstiden ligger på 4 till 8 veckor. Vid klara "öppna fall" betalar ibland flygbolagen på 14 dagar, men mer komplicerade fall kan ta flera månader.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Varför dröjer flygbolaget med att betala min ersättning?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Flygbolagen hoppas oftast att resenären ska tröttna på långa svarstider och ge upp. Administration tar tid, men dröjsmålet är även en medveten strategi.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Finns det en specifik tidsgräns inom vilken flygbolag måste svara?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Det finns ingen hård lagstadgad gräns i EU261 som anger ett exakt antal dagar. De flesta nationella konsumentskyddsmyndigheter anser dock att 6–8 veckor är en absolut maxgräns för första svar.
              </p>
            </Card>
          </div>
        </section>
      </article>
    </LayoutSv>
  );
}