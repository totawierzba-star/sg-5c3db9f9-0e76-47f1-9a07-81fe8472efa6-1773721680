import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, XCircle, CheckCircle2, AlertTriangle, Calendar } from "lucide-react";
import Link from "next/link";

export default function NorwegianForsinkelseVsKansellering() {
  return (
    <LayoutNo>
      <SEO 
        title="Norwegian forsinkelse vs. kansellering – ulike regler, ulik erstatning"
        description="Forstå forskjellen mellom forsinkelse og kansellering hos Norwegian. Lær hvilke regler som gjelder og hvor mye erstatning du kan kreve i hver situasjon."
        url="https://problemlot.com/no/blog/norwegian-forsinkelse-vs-kansellering"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Norwegian forsinkelse vs. kansellering – ulike regler, ulik erstatning
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>6 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
            <Clock className="w-6 h-6" />
            Raskt svar: Forskjellen avgjør dine rettigheter
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              <strong>Forsinkelse:</strong> Flyet lettet, men kom frem 3+ timer sent → du får erstatning etter ankomst
            </p>
            <p>
              <strong>Kansellering:</strong> Flyet lettet aldri (eller erstatningsfly) → du får erstatning + refusjon hvis mindre enn 14 dager varsel
            </p>
            <p className="text-sm border-t border-blue-200 dark:border-blue-800 pt-3 mt-3">
              💡 <strong>Viktig:</strong> Norwegian prøver ofte å kalle kansellering for "lang forsinkelse" for å unngå refusjonsplikten. Dette er ulovlig.
            </p>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <Calendar className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Usikker på hva som gjelder i din sak?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            ClaimWinger analyserer din flysituasjon gratis og krever maksimal erstatning på dine vegne.
          </p>
          <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
              Sjekk min Norwegian-sak
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Hva er definisjonen på forsinkelse vs. kansellering?</h2>
          
          <div className="grid sm:grid-cols-2 gap-4 my-6">
            <div className="border-2 border-blue-300 bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
              <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Forsinkelse
              </h4>
              <ul className="text-sm space-y-2">
                <li><strong>Definisjon:</strong> Flyet lettet og kom frem til destinasjonen, men senere enn planlagt</li>
                <li><strong>Måles ved:</strong> Ankomsttid (når dørene åpnes), ikke avgangstid</li>
                <li><strong>Grense:</strong> 3+ timer forsinkelse ved landing</li>
                <li><strong>Rettighet:</strong> EU261-kompensasjon (250-600 €)</li>
                <li><strong>Ingen refusjon:</strong> Du kom frem til slutt</li>
              </ul>
            </div>

            <div className="border-2 border-red-300 bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
              <h4 className="font-bold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Kansellering
              </h4>
              <ul className="text-sm space-y-2">
                <li><strong>Definisjon:</strong> Det planlagte flyet lettet aldri, eller du ble flyttet til et annet fly</li>
                <li><strong>Grense:</strong> Mindre enn 14 dagers varsel før avgang</li>
                <li><strong>Rettigheter:</strong> EU261-kompensasjon (250-600 €) + full refusjon</li>
                <li><strong>Alternativ:</strong> Norwegian må tilby alternativ rute</li>
              </ul>
            </div>
          </div>

          <p>
            Les mer om grunnlaget: <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:underline">Erstatning for forsinket Norwegian-fly – komplett guide 2025</Link>
          </p>

          <h2>Hvor mye erstatning får du i hver situasjon?</h2>
          
          <h3>Forsinkelse (3+ timer ved ankomst)</h3>
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse bg-white dark:bg-gray-800">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Distanse</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Forsinkelse ved ankomst</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold">Erstatning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Opp til 1500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">3+ timer</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">250 €</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">1500–3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">3+ timer</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">400 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Over 3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">4+ timer</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">600 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Kansellering (mindre enn 14 dager varsel)</h3>
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse bg-white dark:bg-gray-800">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Distanse</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Varsel</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold">Erstatning + Refusjon</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Opp til 1500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">&lt;14 dager</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">250 € + billettpris</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">1500–3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">&lt;14 dager</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">400 € + billettpris</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Over 3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">&lt;14 dager</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">600 € + billettpris</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Les mer: <Link href="/no/blog/norwegian-kansellert-fly-erstatning" className="text-blue-600 hover:underline">Norwegian kansellerte flyet – hvordan får du opptil 600 € i erstatning?</Link>
          </p>

          <h2>Når prøver Norwegian å blande sammen forsinkelse og kansellering?</h2>
          <p>
            Norwegian bruker ofte taktikker for å unngå å betale full erstatning:
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              Vanlige Norwegian-triks
            </h3>
            <ul className="text-sm space-y-2">
              <li><strong>Trikk 1:</strong> Kansellering blir kalt "lang forsinkelse" → du får ikke refusjon</li>
              <li><strong>Trikk 2:</strong> Rebooking presenteres som "alternativ løsning" → erstatning reduseres</li>
              <li><strong>Trikk 3:</strong> "Ekstraordinære omstendigheter" påstås uten bevis</li>
            </ul>
          </div>

          <h2>Hvordan beviser du om det var forsinkelse eller kansellering?</h2>
          <ol>
            <li><strong>Sjekk flynummeret:</strong> Hvis flynummeret endret seg, var det en kansellering (ikke forsinkelse)</li>
            <li><strong>Sjekk avgangslisten:</strong> Hvis det opprinnelige flyet aldri dukket opp, var det kansellering</li>
            <li><strong>Se på billetten:</strong> Hvis Norwegian rebooket deg til et annet fly, var det kansellering</li>
            <li><strong>Bruk FlightRadar24:</strong> ClaimWinger har tilgang til historiske flydata som beviser hva som skjedde</li>
          </ol>

          {/* FAQ */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Ofte stilte spørsmål</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hvis Norwegian rebooket meg til et annet fly, er det forsinkelse eller kansellering?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Kansellering.</strong> Selv om du kom frem, var det opprinnelige flyet kansellert. Du har rett til både erstatning og refusjon (hvis mindre enn 14 dagers varsel).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis Norwegian sier det var "lang forsinkelse" men flynummeret endret seg?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Da lyver Norwegian. Endret flynummer = kansellering. Du har rett til både erstatning og refusjon. ClaimWinger har verktøy for å bevise dette.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Kan jeg kreve både forsinkelseskompensasjon og kanselleringskompensasjon?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Nei.</strong> Du får kun én type kompensasjon – den som gir deg høyest beløp. ClaimWinger velger automatisk den mest fordelaktige kategorien for deg.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis Norwegian varslet meg 13 dager før avgang om kansellering?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Da har du fortsatt rett til full erstatning (innenfor 14-dagersfristen). Norwegian må bevise at de varslet mer enn 14 dager før.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis jeg aksepterte alternativ flyvning – mister jeg da refusjonsretten?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Nei, du kan fortsatt kreve EU261-erstatning hvis det alternative flyet kom frem mer enn 2 timer senere. Men du får ikke billettrefusjon hvis du aksepterte alternativ rute.
                </p>
              </div>
            </div>
          </div>

          {/* CTA 2 */}
          <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-2xl p-8 md:p-12 text-center my-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Usikker på hva som skjedde med ditt Norwegian-fly?</h3>
            <p className="text-xl mb-8 text-blue-100">
              ClaimWinger analyserer din flysituasjon gratis og krever maksimal erstatning på dine vegne.
            </p>
            <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-6">
                Sjekk min Norwegian-sak
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-blue-200 mt-4">
              ✓ No Win, No Fee | ✓ 98% suksessrate | ✓ 4-8 ukers utbetaling
            </p>
          </div>

          <h2>Oppsummering</h2>
          <p>
            Forskjellen mellom forsinkelse og kansellering avgjør dine rettigheter hos Norwegian. Forsinkelse gir kun EU261-erstatning (250-600 €), mens kansellering gir både erstatning og refusjon av billetten. Norwegian prøver ofte å klassifisere kansellering som "lang forsinkelse" for å unngå å betale refusjon – ikke la deg lure. ClaimWinger har verktøy for å bevise hva som egentlig skjedde og krever maksimal erstatning på dine vegne.
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}