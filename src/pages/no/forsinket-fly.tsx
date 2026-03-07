import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plane, Clock, CreditCard } from "lucide-react";

export default function DelayedFlightNo() {
  return (
    <LayoutNo>
      <SEO 
        title="Forsinket fly – Dine rettigheter og erstatning"
        description="Finn ut hva du skal gjøre hvis flyet ditt er forsinket, og når du har rett til opptil 600 € i erstatning."
        url="https://problemlot.com/no/forsinket-fly"
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 dark:text-white">Forsinket fly – Dine rettigheter</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-xl mb-8">
            Hvis flyet ditt er forsinket med mer enn 3 timer ved ankomst, kan du ha rett til økonomisk kompensasjon på opptil 600 € ifølge EU-forordning 261/2004.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4 mt-0">
              Sjekk kravet ditt raskt
            </h2>
            <p className="text-blue-800 dark:text-blue-200 mb-6">
              Ikke la flyselskapet beholde pengene dine. Sjekk gratis om du har rett til erstatning med våre partnere i ClaimWinger.
            </p>
            <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Beregn min erstatning <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          <h2>Når har du krav på erstatning?</h2>
          <ul>
            <li>Du ankommer destinasjonen din mer enn 3 timer forsinket.</li>
            <li>Forsinkelsen skyldes ikke ekstraordinære omstendigheter (som ekstremvær).</li>
            <li>Flyvningen startet i EU/EØS, eller landet i EU/EØS med et EU-flyselskap.</li>
          </ul>

          <h2>Hvor mye kan du få?</h2>
          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center border border-gray-100 dark:border-gray-700">
              <div className="text-3xl font-bold text-blue-600 mb-2">250 €</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Flyvninger opptil 1500 km</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center border border-gray-100 dark:border-gray-700">
              <div className="text-3xl font-bold text-blue-600 mb-2">400 €</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Flyvninger innad i EU over 1500 km, og andre flyvninger mellom 1500 - 3500 km</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center border border-gray-100 dark:border-gray-700">
              <div className="text-3xl font-bold text-blue-600 mb-2">600 €</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Alle andre flyvninger over 3500 km</p>
            </div>
          </div>
        </div>
      </div>
    </LayoutNo>
  );
}