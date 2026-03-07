import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CancelledFlightNo() {
  return (
    <LayoutNo>
      <SEO 
        title="Innstilt fly – Få opptil 600 € i erstatning"
        description="Finn ut hva du skal gjøre hvis flyet ditt er innstilt, og hvordan du får tilbake pengene dine og krever kompensasjon."
        url="https://problemlot.com/no/innstilt-fly"
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 dark:text-white">Innstilt fly – Hva nå?</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-xl mb-8">
            Hvis flyvningen din ble innstilt mindre enn 14 dager før avgang, beskytter EU-forordning 261/2004 deg. Du kan ha rett til opptil 600 € i kompensasjon, i tillegg til refusjon av billetten.
          </p>

          <div className="bg-red-50 dark:bg-red-900/20 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold text-red-900 dark:text-red-100 mb-4 mt-0">
              Ble flyet ditt innstilt?
            </h2>
            <p className="text-red-800 dark:text-red-200 mb-6">
              ClaimWinger eksperter hjelper deg med å kreve erstatningen din raskt og effektivt. Null risiko, ingen kostnad hvis du ikke vinner.
            </p>
            <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Sjekk saken din nå <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          <h2>Dine tre hovedrettigheter</h2>
          <ol>
            <li><strong>Refusjon eller omruting:</strong> Du har rett til å velge mellom å få billettprisen refundert innen 7 dager, eller å bli omrutet til din endelige destinasjon.</li>
            <li><strong>Rett til omsorg:</strong> Hvis du må vente på flyplassen, har du krav på mat, drikke, og ved behov hotellovernatting betalt av flyselskapet.</li>
            <li><strong>Økonomisk kompensasjon:</strong> Mellom 250 € og 600 €, avhengig av flyvningens lengde og når du fikk beskjed om innstillingen.</li>
          </ol>

          <h3>Hva er "ekstraordinære omstendigheter"?</h3>
          <p>
            Flyselskapet trenger ikke å betale kompensasjon hvis innstillingen skyldes omstendigheter de ikke kunne unngå, for eksempel ekstremt vær, flygelederstreik, eller sikkerhetsrisiko. Men tekniske feil er sjelden en gyldig unnskyldning!
          </p>
        </div>
      </div>
    </LayoutNo>
  );
}