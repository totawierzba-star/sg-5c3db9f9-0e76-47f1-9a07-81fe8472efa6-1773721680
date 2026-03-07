import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import Link from "next/link";

export default function NorwegianKansellert14DagerForAvgang() {
  return (
    <LayoutNo>
      <SEO 
        title="Norwegian kansellerte flyet mindre enn 14 dager før avgang – maksimal erstatning"
        description="Norwegian kansellerte flyet ditt med kort varsel? Lær hvordan 14-dagersregelen fungerer og hvordan du krever opptil 600 € + full refusjon."
        url="https://problemlot.com/no/blog/norwegian-kansellert-14-dager-for-avgang"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Norwegian kansellerte flyet mindre enn 14 dager før avgang – maksimal erstatning
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>5 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Quick Answer */}
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
            <Calendar className="w-6 h-6" />
            Raskt svar: Innenfor 14 dager = maksimal erstatning
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              Hvis Norwegian varslet deg om kansellering <strong>mindre enn 14 dager før planlagt avgang</strong>, har du rett til:
            </p>
            <ul className="ml-4 space-y-1">
              <li>💰 <strong>EU261-kompensasjon:</strong> 250–600 € (avhengig av distanse)</li>
              <li>🔄 <strong>Full refusjon:</strong> Billettprisen tilbake</li>
              <li>🏨 <strong>Omsorg:</strong> Hotell, mat, transport (hvis applicable)</li>
            </ul>
            <p className="text-sm border-t border-red-200 dark:border-red-800 pt-3 mt-3">
              💡 <strong>Viktig:</strong> Norwegian må bevise at de varslet deg MER enn 14 dager før. Hvis du fikk varsel dag 13, har du full rett til erstatning.
            </p>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <XCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Norwegian kansellerte med kort varsel?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Sjekk om du har rett til opptil 600 € + full refusjon. Gratis vurdering på 2 minutter.
          </p>
          <a href="https://claimwinger.com/no/kansellert-fly" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6">
              Krev erstatning nå
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Hva er 14-dagersregelen i EU261?</h2>
          <p>
            <strong>EU-forordning 261/2004</strong> (som gjelder i Norge gjennom <strong>EØS-avtalen</strong>) har en kritisk regel for kansellering:
          </p>
          <ul>
            <li><strong>Mer enn 14 dagers varsel:</strong> Norwegian slipper å betale EU261-kompensasjon (men må tilby refusjon eller alternativ rute)</li>
            <li><strong>7-14 dagers varsel:</strong> Erstatning kan reduseres hvis Norwegian tilbyr alternativ rute som kom frem mindre enn 2 timer senere</li>
            <li><strong>Mindre enn 7 dagers varsel:</strong> Full erstatning (250-600 €) i nesten alle tilfeller</li>
          </ul>
          <p>
            Les mer om grunnlaget: <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:underline">Erstatning for forsinket Norwegian-fly – komplett guide 2025</Link>
          </p>

          <h2>Hvor mye får du hvis Norwegian kansellerte innenfor 14 dager?</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse bg-white dark:bg-gray-800">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Distanse</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Varsel innenfor 14 dager</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold">Erstatning + Refusjon</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Opp til 1500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Ja</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">250 € + billettpris</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">1500–3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Ja</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">400 € + billettpris</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Over 3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Ja</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">600 € + billettpris</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p><strong>Eksempel:</strong></p>
          <p>
            Du kjøpte en LowFare-billett Oslo–New York for 1200 NOK. Norwegian kansellerte 10 dager før avgang. Du har rett til:
          </p>
          <ul>
            <li>600 € kompensasjon (~7000 NOK)</li>
            <li>1200 NOK refusjon</li>
            <li><strong>Totalt: ~8200 NOK</strong></li>
          </ul>

          <h2>Hvordan beviser du når Norwegian varslet deg?</h2>
          <p>
            Norwegian må bevise at de varslet deg MER enn 14 dager før. Du kan bevise varslingen med:
          </p>
          <ol>
            <li><strong>Kanselleringsmail fra Norwegian:</strong> Sjekk datostempel i e-posten</li>
            <li><strong>SMS-varsel:</strong> Noter dato og tid</li>
            <li><strong>Bookingbekreftelse:</strong> Sammenlign opprinnelig flydato med kansellering</li>
            <li><strong>Norwegian-konto:</strong> Sjekk "Mine reiser" for historikk</li>
          </ol>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              Vanlig Norwegian-taktikk
            </h3>
            <p className="text-sm mb-0">
              Norwegian hevder ofte at de varslet "mer enn 14 dager før" uten å gi bevis. Hvis du fikk varsel 13 dager før, har du fortsatt full rett til erstatning. ClaimWinger krever bevis fra Norwegian for å verifisere varslingsdato.
            </p>
          </div>

          <h2>Hva hvis Norwegian tilbød alternativ flyvning?</h2>
          <p>
            Hvis Norwegian rebooket deg til et annet fly, påvirker dette erstatningen:
          </p>
          <ul>
            <li><strong>Alternativ rute kom frem mindre enn 2 timer senere:</strong> Erstatning kan falle bort</li>
            <li><strong>Alternativ rute kom frem 2-4 timer senere:</strong> Erstatning reduseres med 50%</li>
            <li><strong>Alternativ rute kom frem mer enn 4 timer senere:</strong> Full erstatning (250-600 €)</li>
            <li><strong>Du nektet alternativ rute:</strong> Full erstatning + refusjon</li>
          </ul>
          <p>
            Les mer: <Link href="/no/blog/norwegian-kansellert-fly-erstatning" className="text-blue-600 hover:underline">Norwegian kansellerte flyet – hvordan får du opptil 600 € i erstatning?</Link>
          </p>

          <h2>Hvordan krever du erstatning fra Norwegian?</h2>
          <ol>
            <li>Gå til <strong>Norwegian.com → Kundeservice</strong></li>
            <li>Fyll ut klageskjemaet med flynummer, PNR, dato</li>
            <li>Last opp <strong>kanselleringsmail</strong> som bevis på varslingsdato</li>
            <li>Krev både <strong>EU261-kompensasjon og refusjon</strong></li>
            <li>Hvis Norwegian nekter: Klage til <strong>Forbrukerrådet</strong> eller bruk ClaimWinger</li>
          </ol>

          {/* FAQ */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Ofte stilte spørsmål</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hvis jeg fikk varsel 13 dager før, har jeg rett til erstatning?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Ja!</strong> 13 dager er innenfor 14-dagersfristen. Norwegian må bevise at de varslet deg MER enn 14 dager før for å slippe å betale.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis Norwegian sier de varslet meg, men jeg ikke mottok e-posten?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Norwegian må bevise at de sendte varselet til riktig e-postadresse. Hvis du ikke mottok varsel, regnes det som at de ikke varslet deg i tide. Du har full rett til erstatning.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Kan jeg kreve både erstatning og refusjon hvis jeg aksepterte alternativ flyvning?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Ja, du kan kreve EU261-kompensasjon (hvis det alternative flyet kom frem mer enn 2 timer senere), men du får ikke billettrefusjon hvis du aksepterte alternativ rute.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis Norwegian kansellerte på grunn av værforhold?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Ekstremvær (tyfon, kraftig snøstorm) er "ekstraordinære omstendigheter" – Norwegian slipper å betale. MEN du har fortsatt rett til refusjon. Les mer: <Link href="/no/blog/norwegian-nektet-erstatning-hva-gjore" className="text-blue-600 hover:underline">Norwegian nektet erstatning – hva gjør du videre?</Link>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hvor lang tid har jeg på meg til å kreve?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  I Norge er foreldelsesfristen <strong>3 år</strong> fra flydatoen. Les mer: <Link href="/no/blog/krave-erstatning-fly-3-ar-siden" className="text-blue-600 hover:underline">Kan jeg kreve erstatning for et fly for 3 år siden?</Link>
                </p>
              </div>
            </div>
          </div>

          {/* CTA 2 */}
          <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-2xl p-8 md:p-12 text-center my-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Kansellert med kort varsel? Få pengene dine nå</h3>
            <p className="text-xl mb-8 text-red-100">
              ClaimWinger krever både erstatning og refusjon på dine vegne. Ingen risiko, full støtte.
            </p>
            <a href="https://claimwinger.com/no/kansellert-fly" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-red-700 hover:bg-gray-100 text-lg px-8 py-6">
                Krev erstatning nå
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-red-200 mt-4">
              ✓ No Win, No Fee | ✓ 98% suksessrate | ✓ 4-8 ukers utbetaling
            </p>
          </div>

          <h2>Oppsummering</h2>
          <p>
            Hvis Norwegian varslet deg om kansellering mindre enn 14 dager før planlagt avgang, har du rett til både EU261-kompensasjon (250-600 €) og full refusjon av billetten. Norwegian må bevise at de varslet deg MER enn 14 dager før for å slippe å betale. ClaimWinger krever automatisk både erstatning og refusjon på dine vegne og har juridisk ekspertise for å bekjempe Norwegians avslag.
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}