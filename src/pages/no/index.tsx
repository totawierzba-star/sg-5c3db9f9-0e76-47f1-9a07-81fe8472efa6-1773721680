import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plane, Clock, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomeNo() {
  return (
    <LayoutNo>
      <SEO 
        title="Forsinket eller innstilt fly? Få opptil 600 € i erstatning"
        description="Har du opplevd et forsinket eller innstilt fly? Sjekk om du har krav på opptil 600 € i kompensasjon ifølge EU-forordning 261/2004."
        url="https://problemlot.com/no"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Problem med flyvningen din? Få opptil <span className="text-blue-600">600 €</span> i erstatning
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
            Sjekk dine rettigheter gratis på bare 2 minutter. Vi hjelper deg med å få pengene du har krav på fra flyselskapet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-6 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
                Sjekk din erstatning gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Hvordan vi kan hjelpe deg</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg dark:bg-gray-800">
              <CardContent className="pt-6 text-center">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 dark:text-white">Forsinket fly</h3>
                <p className="text-gray-600 dark:text-gray-300">Mer enn 3 timers forsinkelse ved ankomst? Du kan ha rett til opptil 600 €.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg dark:bg-gray-800">
              <CardContent className="pt-6 text-center">
                <Plane className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 dark:text-white">Innstilt fly</h3>
                <p className="text-gray-600 dark:text-gray-300">Fikk du beskjed mindre enn 14 dager før avgang? Du kan kreve kompensasjon.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg dark:bg-gray-800">
              <CardContent className="pt-6 text-center">
                <ShieldCheck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 dark:text-white">Nektet ombordstigning</h3>
                <p className="text-gray-600 dark:text-gray-300">Ble du nektet å gå ombord på grunn av overbooking? Du har sterke rettigheter.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* EU261 Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 dark:text-white">Dine rettigheter ifølge EU 261/2004</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              EU-forordning 261/2004 beskytter passasjerer ved flyforsinkelser, innstilte flyvninger og nektet ombordstigning. Denne forordningen gjelder for alle flyvninger som:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Starter fra en flyplass i EU/EØS (uavhengig av flyselskap).</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Lander på en flyplass i EU/EØS, og flyselskapet har hovedkontor i EU/EØS.</span>
              </li>
            </ul>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Krever ikke tid, bare handling!</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-400">La ekspertene i ClaimWinger ta seg av papirarbeidet mens du slapper av.</p>
              <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Send inn krav med ClaimWinger
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </LayoutNo>
  );
}