import React from "react";
import Link from "next/link";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Plane, AlertTriangle, ArrowRight, Shield, Euro } from "lucide-react";

export default function SvIndex() {
  return (
    <LayoutSv>
      <SEO
        title="Ersättning för Försenat & Inställt Flyg | Upp till 600 € | LotProblem.pl"
        description="Har ditt flyg blivit försenat eller inställt? Vi hjälper dig att få upp till 600 € i ersättning. Ingen vinst, ingen avgift. Kontrollera din rätt gratis."
        image="/images/og-image-sv.png"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Ersättning för Flygproblem? <br />
            <span className="text-blue-300">Vi hjälper dig.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-blue-100">
            Upp till 600 € per passagerare för försenade eller inställda flyg. Kontrollera din rätt gratis på 3 minuter.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-bold text-lg px-8 py-6 h-auto shadow-lg" asChild>
              <a href="https://claimwinger.com/sv?utm_source=problemlot-sv&utm_medium=hero_button" target="_blank" rel="nofollow noreferrer noopener">
                Kolla Ersättning Gratis
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto" asChild>
              <Link href="/sv/forsenat-flyg">
                Läs om dina rättigheter
              </Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-blue-200 flex items-center justify-center gap-2">
            <CheckCircle className="h-4 w-4" /> Ingen vinst, ingen avgift
            <span className="hidden sm:inline">•</span>
            <CheckCircle className="h-4 w-4" /> 98% framgångsfrekvens i rätten
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-white dark:bg-gray-800 shadow-sm relative z-20 -mt-8 mx-4 md:mx-auto max-w-6xl rounded-xl border border-gray-100 dark:border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-gray-700">
          <div className="p-4">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">600 €</div>
            <div className="text-gray-600 dark:text-gray-300">Maximal ersättning per person</div>
          </div>
          <div className="p-4">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">3 År</div>
            <div className="text-gray-600 dark:text-gray-300">Tid att kräva ersättning bakåt</div>
          </div>
          <div className="p-4">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">0 Kr</div>
            <div className="text-gray-600 dark:text-gray-300">Kostnad om vi inte vinner</div>
          </div>
        </div>
      </section>

      {/* Main Problems Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Vad hände med ditt flyg?</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/sv/forsenat-flyg" className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Försenat Flyg</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Om ditt flyg var mer än 3 timmar försenat vid ankomst kan du ha rätt till upp till 600 €.
              </p>
              <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                Läs mer <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>

            <Link href="/sv/installat-flyg" className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700">
              <div className="bg-red-100 dark:bg-red-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Inställt Flyg</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Om ditt flyg ställdes in mindre än 14 dagar före avgång kan du få ersättning.
              </p>
              <div className="flex items-center text-red-600 font-semibold group-hover:translate-x-2 transition-transform">
                Läs mer <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">Hur fungerar det?</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-50 dark:bg-blue-900/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Fyll i formuläret</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Det tar bara 3 minuter. Ange dina flyguppgifter i vårt enkla formulär.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 dark:bg-blue-900/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Vi granskar fallet</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Våra experter analyserar din situation och hanterar all kontakt med flygbolaget.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 dark:bg-blue-900/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Du får pengar</h3>
              <p className="text-gray-600 dark:text-gray-300">
                När vi vinner överför vi ersättningen direkt till ditt konto, minus vår avgift.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg" asChild>
               <a href="https://claimwinger.com/sv?utm_source=problemlot-sv&utm_medium=how_it_works" target="_blank" rel="nofollow noreferrer noopener">
                Starta din ansökan nu
              </a>
            </Button>
          </div>
        </div>
      </section>
    </LayoutSv>
  );
}
