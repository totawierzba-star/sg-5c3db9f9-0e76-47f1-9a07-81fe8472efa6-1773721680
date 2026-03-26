import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Calculator, CheckCircle, Clock, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CompensationCalculatorSv() {
  return (
    <LayoutSv>
      <SEO
        title="Ersättningskalkylator — hur mycket kan du få? (250€, 400€, 600€)"
        description="Räkna ut din ersättning för försenat eller inställt flyg på 30 sekunder. Gratis kalkylator enligt EU 261/2004."
        url="https://problemlot.com/sv/ersattning-kalkulator"
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-full mb-4 dark:bg-blue-900/30 dark:text-blue-400">
            <Calculator className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Ersättningskalkylator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Svara på 3 frågor och se exakt hur mycket flygbolaget är skyldigt dig.
          </p>
        </div>

        {/* Calculator Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Step 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Plane className="w-24 h-24" />
            </div>
            <div className="relative z-10">
              <span className="text-5xl font-bold text-blue-100 dark:text-blue-900/50 block mb-2">1</span>
              <h3 className="text-xl font-bold mb-2">Vart flög du?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Distansen avgör beloppet.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>&lt; 1500 km</span>
                  <span className="font-bold text-blue-600">250 €</span>
                </li>
                <li className="flex justify-between">
                  <span>1500 - 3500 km</span>
                  <span className="font-bold text-blue-600">400 €</span>
                </li>
                <li className="flex justify-between">
                  <span>&gt; 3500 km</span>
                  <span className="font-bold text-blue-600">600 €</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Clock className="w-24 h-24" />
            </div>
            <div className="relative z-10">
              <span className="text-5xl font-bold text-blue-100 dark:text-blue-900/50 block mb-2">2</span>
              <h3 className="text-xl font-bold mb-2">Hur sent var det?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Tiden vid ankomst räknas.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Över 3 timmar</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Inställt &lt; 14 dagar</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <CheckCircle className="w-24 h-24" />
            </div>
            <div className="relative z-10">
              <span className="text-5xl font-bold text-blue-100 dark:text-blue-900/50 block mb-2">3</span>
              <h3 className="text-xl font-bold mb-2">Vems fel?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Orsaken är avgörande.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Tekniskt fel (JA)</span>
                </li>
                <li className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Personalbrist (JA)</span>
                </li>
                <li className="flex items-center gap-2 text-red-400">
                  <span className="text-xs border rounded px-1">X</span>
                  <span>Storm / Terror (NEJ)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            Kolla ditt flyg nu – det är gratis
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Använd vårt officiella formulär hos ClaimWinger. Det tar bara 2 minuter och vi berättar direkt om du har rätt till pengar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 border-none text-lg px-8 h-14" asChild>
              <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=calculator-page&utm_campaign=calc-main" target="_blank" rel="nofollow noreferrer noopener">
                Beräkna ersättning
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-blue-200 opacity-80">
            Ingen vinst, ingen avgift. Vi tar bara betalt om du får betalt.
          </p>
        </div>

        {/* Table Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Ersättningstabell 2025</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="p-4 border dark:border-gray-700">Flygsträcka</th>
                  <th className="p-4 border dark:border-gray-700">Exempelrutter</th>
                  <th className="p-4 border dark:border-gray-700">Ersättning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border dark:border-gray-700">Upp till 1500 km</td>
                  <td className="p-4 border dark:border-gray-700">Stockholm – Gdansk, Göteborg – London</td>
                  <td className="p-4 border dark:border-gray-700 font-bold text-green-600">250 € (ca 2 900 kr)</td>
                </tr>
                <tr>
                  <td className="p-4 border dark:border-gray-700">1500 – 3500 km (Inom EU)</td>
                  <td className="p-4 border dark:border-gray-700">Stockholm – Malaga, Luleå – Gran Canaria</td>
                  <td className="p-4 border dark:border-gray-700 font-bold text-green-600">400 € (ca 4 600 kr)</td>
                </tr>
                <tr>
                  <td className="p-4 border dark:border-gray-700">Över 3500 km (Utanför EU)</td>
                  <td className="p-4 border dark:border-gray-700">Stockholm – New York, Köpenhamn – Bangkok</td>
                  <td className="p-4 border dark:border-gray-700 font-bold text-green-600">600 € (ca 6 900 kr)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </LayoutSv>
  );
}
