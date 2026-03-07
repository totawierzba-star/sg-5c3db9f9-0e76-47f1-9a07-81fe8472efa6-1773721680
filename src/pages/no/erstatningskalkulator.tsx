import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Calculator, ArrowRight } from "lucide-react";

export default function CalculatorNo() {
  return (
    <LayoutNo>
      <SEO 
        title="Erstatningskalkulator – Hvor mye kan du få?"
        description="Sjekk hvor mye penger du kan kreve i erstatning for et forsinket eller innstilt fly med vår enkle guide og kalkulator."
        url="https://problemlot.com/no/erstatningskalkulator"
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <Calculator className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4 dark:text-white">Erstatningskalkulator</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Finn ut nøyaktig hvor mye flyselskapet skylder deg.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 text-center">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Sjekk kravet ditt med ClaimWinger</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Den enkleste måten å beregne nøyaktig erstatningsbeløp og sjekke om flyvningen din kvalifiserer, er å bruke det gratis verktøyet til vår partner.
          </p>
          <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 h-auto">
              Start beregningen nå <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="mt-16 prose dark:prose-invert max-w-none">
          <h2>Standard erstatningsbeløp (EU261)</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                <th className="py-4">Flyvningens lengde</th>
                <th className="py-4">Erstatning</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-4">Under 1500 km (Kortdistanse)</td>
                <td className="py-4 font-bold text-blue-600">250 €</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-4">1500 - 3500 km (Mellomdistanse)</td>
                <td className="py-4 font-bold text-blue-600">400 €</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-4">Over 3500 km (Langdistanse)</td>
                <td className="py-4 font-bold text-blue-600">600 €</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm text-gray-500 mt-4">
            Merk: Hvis flyvningen er over 3500 km og forsinkelsen er mellom 3 og 4 timer, kan erstatningen halveres til 300 €.
          </p>
        </div>
      </div>
    </LayoutNo>
  );
}