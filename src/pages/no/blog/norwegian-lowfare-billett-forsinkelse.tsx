import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Ticket, CheckCircle2, Euro, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function NorwegianLowFareBillettForsinkelse() {
  return (
    <LayoutNo>
      <SEO 
        title="Norwegian LowFare-billett og forsinkelse — gjelder de samme reglene?"
        description="Har du kjøpt LowFare-billett hos Norwegian og opplever forsinkelse? Sjekk om du har rett til erstatning uavhengig av billettpris."
        url="https://problemlot.com/no/blog/norwegian-lowfare-billett-forsinkelse"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Norwegian LowFare-billett og forsinkelse — gjelder de samme reglene?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>5 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
            <Ticket className="w-6 h-6" />
            Raskt svar: Ja! LowFare-billetter gir samme erstatningsrett
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              Hvis du har kjøpt en <strong>LowFare-billett</strong> hos Norwegian og flyet var forsinket mer enn 3 timer, har du <strong>samme rett til erstatning</strong> som passasjerer med dyrere billetter. <strong>EU261</strong> (gjelder i Norge gjennom <strong>EØS-avtalen</strong>) gir erstatning uavhengig av billettpris — Norwegian må betale <strong>250-600 €</strong> basert på flyavstand og forsinkelsestid.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <Euro className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">LowFare forsinket? Krev full erstatning</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Sjekk om du har rett til 250-600 € erstatning uavhengig av billettpris.
          </p>
          <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6">
              Sjekk min LowFare-forsinkelse
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Hva er Norwegian LowFare?</h2>
          <p>
            <strong>LowFare</strong> er Norwegians billigste billettklasse med begrensede tjenester:
          </p>
          <ul>
            <li>Ingen gratis bagasje (kun håndbagasje)</li>
            <li>Ingen gratis seteplassreservasjon</li>
            <li>Ingen gratis mat eller drikke om bord</li>
            <li>Ingen mulighet for endring eller refusjon (normalt)</li>
          </ul>

          <p>
            <strong>Men viktig:</strong> Selv om LowFare har begrensede tjenester, <strong>påvirker dette IKKE dine rettigheter under EU261</strong>. Hvis flyet er forsinket mer enn 3 timer, har du rett til erstatning uavhengig av billettpris.
          </p>

          <h2>EU261 gjelder alle billettklasser</h2>
          <p>
            <strong>EU261/2004</strong> (som gjelder i Norge gjennom <strong>EØS-avtalen</strong>) sikrer passasjerers rettigheter uavhengig av billettpris eller billettklasse. Dette betyr:
          </p>
          <ol>
            <li><strong>Samme erstatning:</strong> LowFare-passasjerer får samme beløp (250-600 €) som Flex- eller Premium-passasjerer</li>
            <li><strong>Samme tidsfrister:</strong> 3-timers regel gjelder alle billettklasser</li>
            <li><strong>Samme prosess:</strong> Du sender krav på samme måte som andre passasjerer</li>
          </ol>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse bg-white dark:bg-gray-800">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Flyavstand</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Forsinkelse</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold">Erstatning (LowFare)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Under 1500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">3+ timer</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">250 €</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">1500-3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">3+ timer</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">400 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Over 3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">3+ timer</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">600 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Les mer: <Link href="/no/blog/norwegian-hvor-mye-erstatning" className="text-blue-600 hover:underline">Hvor mye erstatning kan du kreve fra Norwegian?</Link>
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              Norwegian prøver ofte å villede LowFare-passasjerer
            </h3>
            <p className="text-sm mb-0">
              Norwegian kundeservice kan si at <strong>"LowFare ikke inkluderer erstatning"</strong> eller at <strong>"du må oppgradere billetten for å kreve"</strong>. Dette er <strong>FEIL</strong> — EU261 gjelder alle billettklasser. Ikke la Norwegian villede deg.
            </p>
          </div>

          <h2>Hvordan krever du erstatning med LowFare-billett?</h2>
          <p>
            Prosessen er <strong>identisk</strong> for alle billettklasser:
          </p>
          <ol>
            <li><strong>Samle bevis:</strong> Boardingkort, bookingbekreftelse, skjermbilde av forsinkelsestid</li>
            <li><strong>Send krav til Norwegian:</strong> Norwegian.com → Kundeservice → Erstatningskrav</li>
            <li><strong>Forvent avslag:</strong> Norwegian nekter ofte første gang (spesielt for LowFare)</li>
            <li><strong>Eskalere:</strong> Bruk ClaimWinger for å kjempe mot Norwegians avslag</li>
          </ol>

          <p>
            Les mer: <Link href="/no/blog/norwegian-hvordan-soke-erstatning-steg-for-steg" className="text-blue-600 hover:underline">Hvordan søker du om erstatning fra Norwegian steg for steg?</Link>
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Ofte stilte spørsmål</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Får jeg mindre erstatning med LowFare enn med Flex?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Nei!</strong> Erstatningsbeløpet er <strong>identisk</strong> uavhengig av billettklasse. En LowFare-passasjer får samme 400 € som en Flex-passasjer på samme forsinkede fly.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis Norwegian sier "LowFare inkluderer ikke erstatning"?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Dette er <strong>feil informasjon</strong>. EU261 gjelder alle billettklasser — Norwegian kan ikke ekskludere LowFare fra lovpålagte rettigheter. Insister på erstatning eller bruk ClaimWinger.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Kan Norwegian nekte erstatning fordi jeg ikke hadde innsjekket bagasje?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Nei.</strong> Erstatningsretten er <strong>uavhengig av bagasje</strong>. Selv om LowFare kun inkluderer håndbagasje, har du samme rett til erstatning som andre passasjerer.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Gjelder dette også for LowFare-billetter kjøpt via Skyscanner eller Google Flights?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Ja!</strong> EU261 gjelder uavhengig av hvor du kjøpte billetten. Selv om du booket via tredjepart, har du rett til erstatning direkte fra Norwegian.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hvor lang tid har jeg på meg til å kreve med LowFare?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  I Norge er foreldelsesfristen <strong>3 år</strong> fra flydatoen for alle billettklasser. Les mer: <Link href="/no/blog/norwegian-foreldelsesfrist-krav" className="text-blue-600 hover:underline">Foreldelsesfrist for Norwegian-krav</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-emerald-700 text-white rounded-2xl p-8 md:p-12 text-center my-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">LowFare forsinket? Krev full erstatning nå</h3>
            <p className="text-xl mb-8 text-green-100">
              ClaimWinger kjemper mot Norwegians feilaktige avslag til LowFare-passasjerer. Høy suksessrate, No Win No Fee.
            </p>
            <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 text-lg px-8 py-6">
                Beregn min erstatning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-green-200 mt-4">
              ✓ 98% suksessrate | ✓ 4-8 ukers utbetaling | ✓ Ingen risiko
            </p>
          </div>

          <h2>Oppsummering</h2>
          <p>
            Norwegian LowFare-billetter gir <strong>samme rett til erstatning</strong> som dyrere billettklasser. Hvis flyet var forsinket mer enn 3 timer, har du rett til 250-600 € kompensasjon uavhengig av billettpris. Norwegian prøver ofte å villede LowFare-passasjerer ved å si at "billetten ikke inkluderer erstatning" — dette er feil. ClaimWinger har erfaring med å kjempe mot disse avslagene. Les også den omfattende guiden: <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:underline">Erstatning for forsinket Norwegian-fly — komplett guide 2025</Link>.
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}
