import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plane, Euro, AlertTriangle, CheckCircle2, Globe } from "lucide-react";
import Link from "next/link";

export default function NorwegianOsloNewYorkErstatning() {
  return (
    <LayoutNo>
      <SEO 
        title="Norwegian Oslo–New York erstatning – hvordan få 600 € for langdistanse?"
        description="Oslo–New York er ~5900 km og kvalifiserer for maksimal 600 € erstatning ved forsinkelse eller kansellering. Komplett guide til transatlantiske rettigheter."
        url="https://problemlot.com/no/blog/norwegian-oslo-new-york-erstatning"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Norwegian Oslo–New York erstatning – hvordan får du 600 € for langdistanse?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>8 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Quick Answer */}
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
            <Euro className="w-6 h-6" />
            Raskt svar: Oslo–New York gir rett til 600 € (maksimal erstatning)
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              Oslo–New York er <strong>~5900 km</strong> (over 3500 km-grensen), så du har rett til <strong>maksimal 600 €</strong> kompensasjon hvis Norwegian-flyet ditt er forsinket <strong>mer enn 4 timer</strong> ved ankomst eller kansellert mindre enn 14 dager før avgang.
            </p>
            <p className="text-sm border-t border-green-200 dark:border-green-800 pt-3 mt-3">
              💡 <strong>Viktig:</strong> For langdistanse (3500+ km) er grensen 4 timer, ikke 3 timer som for kortere ruter.
            </p>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <Globe className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Ble ditt Norwegian Oslo–New York-fly forsinket?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Sjekk om du har rett til 600 € (ca. 7000 NOK) i erstatning. Gratis vurdering på 2 minutter.
          </p>
          <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6">
              Sjekk min transatlantiske forsinkelse
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Hvorfor gjelder EU261 for transatlantiske Norwegian-fly?</h2>
          <p>
            Mange norske passasjerer spør: "Gjelder europeiske regler for fly som går til USA?"
          </p>
          <p>
            Svaret er <strong>ja</strong> — men kun i én retning. <strong>EU-forordning 261/2004</strong> (som gjelder i Norge gjennom <strong>EØS-avtalen</strong>) beskytter passasjerer på:
          </p>
          <ul>
            <li>✈️ <strong>Fly fra Norge/EØS til USA</strong> (uansett hvilket flyselskap)</li>
            <li>✈️ <strong>Fly fra USA til Norge/EØS</strong> operert av <strong>europeiske flyselskap</strong> (som Norwegian)</li>
          </ul>
          <p>
            Dette betyr at hvis Norwegian flyr Oslo–New York eller New York–Oslo, har du full EU261-beskyttelse i begge retninger.
          </p>
          <p>
            Les mer om grunnlaget: <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:underline">Erstatning for forsinket Norwegian-fly – komplett guide 2025</Link>
          </p>

          <h2>Hvor mye erstatning får du for Oslo–New York?</h2>
          <p>
            Oslo–New York er <strong>~5900 km</strong> i direkte avstand (Great Circle-distanse), noe som plasserer ruten i den høyeste kompensasjonskategorien:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse bg-white dark:bg-gray-800">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Situasjon</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Vilkår</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold">Erstatning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Forsinkelse</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3"><strong>4+ timer</strong> ved ankomst</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600 text-xl">600 €</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Forsinkelse</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">3-4 timer ved ankomst</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-yellow-600 text-xl">300 € (halvering)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Kansellering</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Mindre enn 14 dager før avgang</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600 text-xl">600 €</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Nektet ombordstigning</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Overbooking</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600 text-xl">600 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              Viktig: 4-timersregelen for langdistanse
            </h3>
            <p className="text-sm mb-0">
              For fly over 3500 km (som Oslo–New York) er kompensasjonsgrensen <strong>4 timer</strong> ved ankomst, ikke 3 timer. Hvis flyet ditt landet 3t 45min forsinket, får du dessverre <strong>ingen erstatning</strong>. Men hvis det landet 4t 1min forsinket, får du <strong>full 600 €</strong>.
            </p>
          </div>

          <h2>Vanligste årsaker til Oslo–New York-forsinkelser</h2>
          <p>
            Transatlantiske flygninger har unike utfordringer sammenlignet med europeiske ruter. Basert på data fra <strong>Luftfartstilsynet</strong> er de vanligste årsakene til Norwegian-forsinkelser på Oslo–New York:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 my-6">
            <div className="border-2 border-red-300 bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
              <h4 className="font-bold text-red-700 dark:text-red-400 mb-3">❌ Norwegian MÅ betale</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Teknisk feil på fly</li>
                <li>✓ Forsinkelse fra tidligere fly (domino-effekt)</li>
                <li>✓ Mannskapsplanlegging</li>
                <li>✓ Operasjonelle forsinkelser</li>
                <li>✓ Norwegian-streik</li>
              </ul>
            </div>

            <div className="border-2 border-green-300 bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
              <h4 className="font-bold text-green-700 dark:text-green-400 mb-3">✅ Ekstraordinært</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Flygelederstreik</li>
                <li>✓ Ekstremvær (orkaner, kraftig snøstorm)</li>
                <li>✓ Sikkerhetstrussel / terrorvarsel</li>
                <li>✓ Politisk uro / flystenging</li>
              </ul>
            </div>
          </div>

          <p>
            <strong>Merk:</strong> "Dårlig vær" er IKKE automatisk ekstraordinært. Hvis andre flyselskap (for eksempel SAS eller United) landet på JFK til samme tid, kan Norwegian IKKE påberope seg værforhold.
          </p>

          <h2>Rett til omsorg ved langdistanseforsinkelse</h2>
          <p>
            Hvis Oslo–New York-flyet ditt er forsinket <strong>4+ timer</strong>, må Norwegian tilby deg:
          </p>
          <ul>
            <li>🍽️ Gratis mat og drikke (rimelige mengder)</li>
            <li>📞 2 telefonsamtaler, e-poster eller fax</li>
            <li>🏨 Hvis overnatting er nødvendig: Hotellrom + transport til/fra flyplassen</li>
          </ul>
          <p>
            Hvis Norwegian ikke tilbyr dette, <strong>kjøp det selv og krev refusjon</strong> (ta vare på alle kvitteringer).
          </p>

          <h2>Hvordan krever du erstatning?</h2>
          <p>Du har to hovedalternativer:</p>

          <h3>Alternativ 1: Direkte til Norwegian</h3>
          <ol>
            <li>Gå til <strong>Norwegian.com → Kundeservice</strong></li>
            <li>Fyll ut klageskjemaet</li>
            <li>Last opp dokumenter (boardingkort, bookingbekreftelse)</li>
            <li>Vent på svar (ofte 30-90 dager)</li>
            <li>Ved avslag: Klage til <strong>Forbrukerrådet</strong> (6-12 mnd)</li>
          </ol>

          <h3>Alternativ 2: Bruk ClaimWinger</h3>
          <ol>
            <li>Legg inn flynummer på <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener" className="text-blue-600 hover:underline">claimwinger.com/no/forsinket-fly</a></li>
            <li>ClaimWinger sjekker automatisk om kravet er gyldig</li>
            <li>De tar all kommunikasjon med Norwegian</li>
            <li>Ved avslag: Advokater tar saken til retten</li>
            <li>Du betaler ingenting hvis kravet tapes</li>
            <li>Gjennomsnittlig tid: 4-8 uker</li>
          </ol>

          <p>
            Les mer: <Link href="/no/blog/lonner-det-seg-a-bruke-et-erstatningsselskap-for-flykrav" className="text-blue-600 hover:underline">Lønner det seg å bruke et erstatningsselskap for flykrav?</Link>
          </p>

          {/* FAQ */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Ofte stilte spørsmål</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis flyet var 3t 55min forsinket (under 4 timer)?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Dessverre får du ingen EU261-erstatning. Grensen for langdistanse er <strong>4 timer ved ankomst</strong>. Men du har fortsatt rett til omsorg (mat, drikke) på flyplassen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Gjelder det samme hvis jeg fløy New York–Oslo?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Ja! Norwegian er et europeisk flyselskap, så EU261 gjelder i <strong>begge retninger</strong> på transatlantiske ruter.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Kan jeg få både 600 € og refusjon av billetten?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Avhenger av situasjonen.</strong> Ved kansellering: Ja, du får både billettpris tilbake + 600 €. Ved forsinkelse: Du får kun 600 € (siden du til slutt kom frem). Les mer: <Link href="/no/blog/norwegian-erstatning-vs-refusjon" className="text-blue-600 hover:underline">Erstatning vs. refusjon</Link>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis jeg hadde LowFare-billett for 2000 NOK?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  EU261-erstatningen er <strong>fast</strong> basert på distanse, ikke billettpris. Selv om du betalte 2000 NOK, får du 600 € (~7000 NOK) hvis vilkårene er oppfylt.
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
          <div className="bg-gradient-to-br from-green-600 to-teal-700 text-white rounded-2xl p-8 md:p-12 text-center my-12 shadow-lg">
            <Euro className="w-20 h-20 mx-auto mb-4 opacity-90" />
            <h3 className="text-3xl font-bold mb-4">Oslo–New York forsinket? Få maksimal erstatning</h3>
            <p className="text-xl mb-8 text-green-100">
              Transatlantiske forsinkelser gir rett til 600 € (ca. 7000 NOK). Sjekk om du kvalifiserer.
            </p>
            <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 text-lg px-8 py-6">
                Sjekk min Oslo–New York-erstatning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-green-200 mt-4">
              ✓ No Win, No Fee | ✓ 98% suksessrate | ✓ 4-8 ukers utbetaling
            </p>
          </div>

          <h2>Oppsummering</h2>
          <p>
            Oslo–New York er en langdistanserute (~5900 km) som kvalifiserer for maksimal 600 € erstatning hvis flyet er forsinket mer enn 4 timer ved ankomst eller kansellert mindre enn 14 dager før avgang. EU261 gjelder i begge retninger for Norwegian-fly. Norwegian avviser ofte gyldige krav — derfor anbefaler vi å bruke ClaimWinger som har høy suksessrate mot Norwegian på transatlantiske ruter.
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}
