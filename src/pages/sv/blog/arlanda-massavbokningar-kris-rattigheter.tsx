import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, AlertTriangle, Clock, ShieldAlert } from "lucide-react";
import Link from "next/link";

export default function ArlandaMassavbokningar() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Har jag rätt till hotell om alla flyg från Arlanda ställs in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JA! Även vid extrema kriser (som snöstormar, IT-haverier eller flygledarstrejk) är flygbolaget alltid skyldigt att erbjuda 'rätt till omvårdnad'. Detta inkluderar hotellövernattning, transport till hotellet samt mat och dryck i väntan på ombokning. Om flygbolaget inte ordnar detta, spara alla kvitton och kräv ersättning i efterhand."
        }
      },
      {
        "@type": "Question",
        "name": "Ger massavbokningar på grund av snöstorm rätt till 600 €?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nej. Extremt väder som tvingar flygplatsen att stänga klassificeras som 'extraordinära omständigheter'. I dessa fall har du rätt till återbetalning eller ombokning samt hotell/mat, men INTE den standardiserade EU261-kompensationen på 250-600 €."
        }
      },
      {
        "@type": "Question",
        "name": "Vad händer om massavbokningarna beror på flygbolagets egen personalstrejk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Om det är flygbolagets EGEN personal (t.ex. SAS-piloter) som strejkar, räknas det inte som en extraordinär omständighet. Då har du full rätt till EU261-ersättning på upp till 600 €, utöver rätten till ombokning."
        }
      },
      {
        "@type": "Question",
        "name": "Arlanda har stängt på grund av bagagebandshaveri, får jag ersättning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Stora tekniska fel på själva flygplatsens infrastruktur (som Swedavias bagagesystem eller säkerhetskontroll) betraktas ofta som omständigheter utanför flygbolagets kontroll. Ersättning kan nekas, men du har alltid kvar din rätt till omvårdnad (mat/hotell)."
        }
      }
    ]
  };

  return (
    <LayoutSv>
      <SEO 
        title="Massavbokningar på Arlanda (ARN) — Rättigheter vid Kris"
        description="Inställda flyg i massor på Stockholm Arlanda? Lär dig dina rättigheter vid strejk, väderkaos eller IT-problem och hur du kräver ersättning enligt EU261."
        image="/og-image.png"
        url="https://problemlot.com/sv/blog/arlanda-massavbokningar-kris-rattigheter"
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
          <span>Arlanda Massavbokningar</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">⚠️</span>
            <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
              Flygplatskris & Kaos
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Massavbokningar på Arlanda — Passagerares rättigheter vid kris
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
            Ibland lamslås Stockholm Arlanda helt. Vare sig det beror på extrema snöstormar, globala IT-haverier (som CrowdStrike-kraschen), eller storskaliga strejker, lämnas tusentals passagerare strandade. Vid <strong>massavbokningar</strong> försöker flygbolagen ofta skaka av sig allt ansvar — men <strong>din rätt till omvårdnad försvinner aldrig</strong>.
          </p>
        </div>

        <Card className="p-8 mb-12 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900 border-red-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Fast på Arlanda?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Låt oss reda ut om kaoset ger dig rätt till 600 € i ersättning. Gör en gratis kontroll och låt våra experter ta striden åt dig.
              </p>
            </div>
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg whitespace-nowrap">
              <Link href="https://claimwinger.com/sv/installat-flyg">
                Starta Krav På Ersättning →
              </Link>
            </Button>
          </div>
        </Card>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Rätt till omvårdnad gäller ALLTID
          </h2>
          <p>
            Det viktigaste du behöver veta under en flygplatskris är detta: <Link href="https://claimwinger.com/sv" className="text-blue-600 hover:underline">EU-förordning 261/2004</Link> garanterar din rätt till <strong>omvårdnad</strong> oavsett varför flyget är inställt. Även om en vulkan får utbrott eller en snöstorm stänger Arlanda, MÅSTE flygbolaget erbjuda:
          </p>
          <ul className="space-y-2 mb-8">
            <li>• <strong>Mat och dryck</strong> som står i rimlig proportion till väntetiden.</li>
            <li>• <strong>Hotellrum</strong> om en ombokning kräver att du stannar över natten.</li>
            <li>• <strong>Transport</strong> mellan Arlanda och hotellet.</li>
          </ul>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-500 p-4 mb-8">
            <strong>Tips vid massavbokningar:</strong> Flygbolagets personal hinner sällan boka hotell till tusentals människor samtidigt. Spara alla kvitton för mat, taxi och rimligt prissatta hotellrum — du har rätt att kräva tillbaka dessa utgifter i efterhand.
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Rätt till ekonomisk ersättning (250-600 €)
          </h2>
          <p>
            Medan rätten till omvårdnad alltid gäller, beror rätten till den fasta klumpsumman (skadeståndet) på orsakerna bakom kaoset.
          </p>

          <div className="space-y-6 my-8">
            <Card className="p-6 border-l-4 border-green-600">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Då FÅR du EU-ersättning:
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Interna strejker:</strong> Om flygbolagets egen personal (piloter, kabinpersonal) går ut i strejk. <br/><br/>
                <strong>Tekniska fel på flygplan:</strong> Även om flera plan drabbas samtidigt av tekniskt underhåll som drar ut på tiden.<br/><br/>
                <strong>Crew shortage:</strong> Flygbolaget har misslyckats med sin personalplanering.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-red-600">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white flex items-center gap-2 mb-2">
                <ShieldAlert className="w-5 h-5 text-red-600" />
                Då får du INGEN ersättning (Extraordinärt):
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Extremt väder:</strong> Oväder som gör det osäkert att flyga eller tvingar flygtrafikledningen att stänga banorna.<br/><br/>
                <strong>Externa strejker:</strong> Strejk bland Swedavias säkerhetspersonal, flygledare eller bagagehanterare.<br/><br/>
                <strong>Säkerhetshot:</strong> Drönare över Arlanda, bombhot eller politisk instabilitet.
              </p>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            IT-Haverier (t.ex. CrowdStrike) — Ett gränsfall
          </h2>
          <p>
            Under globala IT-kriser, där incheckningssystem och gater slutar fungera, hävdar flygbolagen konsekvent "extraordinära omständigheter". Rättsläget här prövas ständigt. Om problemet ligger hos en tredjepartsleverantör som flygbolaget anlitat, kan det argumenteras att flygbolaget borde haft redundanta system. Ta alltid juridisk hjälp vid stora IT-haverier.
          </p>
        </div>

        <Card className="p-8 my-12 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ge inte upp dina rättigheter
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Flygbolag utnyttjar ofta kaos för att slippa betala. ClaimWinger granskar varje inställt flyg med flygdata för att bevisa om flygbolaget ljuger om "extraordinära omständigheter".
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
              <Link href="https://claimwinger.com/sv">
                Få Din Ersättning Prövad Gratis →
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