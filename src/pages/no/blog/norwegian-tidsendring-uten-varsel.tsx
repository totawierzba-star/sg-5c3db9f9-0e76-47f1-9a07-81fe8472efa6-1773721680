import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, AlertTriangle, CheckCircle2, Calendar } from "lucide-react";
import Link from "next/link";

export default function NorwegianTidsendringUtenVarsel() {
  return (
    <LayoutNo>
      <SEO 
        title="Norwegian tidsendring uten varsel – når har du rett til erstatning?"
        description="Norwegian endret avgangstiden uten å varsle deg? Lær når tidsendringer regnes som kansellering og gir rett til opptil 600 € erstatning."
        url="https://problemlot.com/no/blog/norwegian-tidsendring-uten-varsel"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Norwegian tidsendring uten varsel – når har du rett til erstatning?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>5 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Quick Answer */}
        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-3 flex items-center gap-2">
            <Clock className="w-6 h-6" />
            Raskt svar: Tidsendring = kansellering hvis mer enn 2 timer
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              Hvis Norwegian endrer avgangstiden med <strong>mer enn 2 timer</strong> (tidligere eller senere) mindre enn <strong>14 dager før avgang</strong>, regnes det juridisk som en <strong>kansellering</strong>. Du har rett til opptil <strong>600 € erstatning</strong> under EU261 (gjelder i Norge gjennom EØS-avtalen).
            </p>
            <p className="text-sm border-t border-orange-200 dark:border-orange-800 pt-3 mt-3">
              💡 <strong>Viktig:</strong> Norwegian må varsle deg minst 14 dager før for å slippe å betale erstatning – selv om du godtar den nye tiden.
            </p>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <Calendar className="w-16 h-16 text-orange-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Norwegian endret avgangstiden din?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Sjekk om du har rett til opptil 600 € erstatning for tidsendring. Gratis vurdering på 2 minutter.
          </p>
          <a href="https://claimwinger.com/no/kansellert-fly" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6">
              Sjekk min tidsendring
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Når regnes tidsendring som kansellering?</h2>
          <p>
            Under <strong>EU-forordning 261/2004</strong> (som gjelder i Norge gjennom <strong>EØS-avtalen</strong>) regnes en tidsendring som en <strong>kansellering</strong> hvis:
          </p>
          <ul>
            <li>Avgangstiden endres med <strong>mer enn 2 timer</strong> (tidligere eller senere)</li>
            <li>Norwegian varsler deg <strong>mindre enn 14 dager før avgang</strong></li>
          </ul>
          <p>
            Dette betyr at Norwegian må betale samme kompensasjon som ved en fullstendig kansellering – opptil <strong>600 €</strong> avhengig av distanse.
          </p>
          <p>
            Les mer: <Link href="/no/blog/norwegian-kansellert-fly-erstatning" className="text-blue-600 hover:underline">Norwegian kansellerte flyet – hvordan får du opptil 600 € i erstatning?</Link>
          </p>

          <h2>Hvor mye erstatning får du?</h2>
          <p>
            Erstatningsbeløpet avhenger av <strong>flydistansen</strong> (ikke billettpris):
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse bg-white dark:bg-gray-800">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Distanse</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Tidsendring mindre enn 14 dager før</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold">Erstatning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Opp til 1500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Ja</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">250 €</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">1500–3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Ja</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">400 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Over 3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Ja</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">600 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p><strong>Eksempel:</strong></p>
          <p>
            Du booket Oslo–New York med avgang kl. 14:00. Norwegian sendte deg e-post 10 dager før at flyet nå går kl. 18:00 (4 timer senere). Dette regnes som kansellering → du får <strong>600 €</strong> erstatning.
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              Kritisk 14-dagersregel
            </h3>
            <p className="text-sm mb-0">
              Hvis Norwegian varslet deg <strong>mer enn 14 dager før</strong>, slipper de å betale erstatning – selv om tidsendringen var stor. Det er derfor Norwegian ofte sender varslinger akkurat 15 dager før avgang.
            </p>
          </div>

          <h2>Hva med mindre tidsendringer?</h2>
          <p>
            Hvis tidsendringen er <strong>mindre enn 2 timer</strong>, regnes det ikke som kansellering. Du får:
          </p>
          <ul>
            <li><strong>Ingen kompensasjon</strong> under EU261</li>
            <li><strong>Rett til å kansellere billetten</strong> og få full refusjon (hvis du ikke vil fly med ny tid)</li>
          </ul>
          <p>
            <strong>Eksempel:</strong> Norwegian flytter avgangen fra kl. 14:00 til kl. 15:30 (1,5 timer). Du får ingen erstatning, men kan kreve billetten tilbake hvis du ikke kan reise på den nye tiden.
          </p>

          <h2>Hvordan krever du erstatning for tidsendring?</h2>
          <ol>
            <li>Samle bevis: opprinnelig bookingbekreftelse (viser gammel tid) + e-post fra Norwegian (viser ny tid og når du ble varslet)</li>
            <li>Send krav til <strong>Norwegian.com → Kundeservice</strong></li>
            <li>Hvis Norwegian nekter: Send klage til <strong>Forbrukerrådet</strong> eller bruk ClaimWinger</li>
          </ol>
          <p>
            Les mer: <Link href="/no/blog/norwegian-hvordan-soke-erstatning-steg-for-steg" className="text-blue-600 hover:underline">Hvordan søker du om erstatning fra Norwegian steg for steg?</Link>
          </p>

          <h2>Hva hvis du godtok den nye tiden?</h2>
          <p>
            <strong>Du mister IKKE retten til erstatning</strong> selv om du godtok den nye avgangstiden eller fløy på det nye tidspunktet. EU261 gir deg rett til kompensasjon uavhengig av om du aksepterte endringen.
          </p>
          <p>
            Norwegian prøver ofte å hevde at du "aksepterte" endringen ved å fly – dette er <strong>ulovlig</strong>. Du har fortsatt krav på pengene.
          </p>

          {/* FAQ */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Ofte stilte spørsmål</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis Norwegian flyttet avgangen 1 uke tidligere?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Hvis den nye avgangen er <strong>mer enn 2 timer tidligere</strong> enn opprinnelig tid, regnes det som kansellering. Du får erstatning hvis du ble varslet mindre enn 14 dager før.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Får jeg både refusjon og erstatning?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Ja!</strong> Du kan velge: (1) Fly på den nye tiden + få erstatning, eller (2) Kansellere billetten + få refusjon + erstatning. Begge alternativene gir deg kompensasjon.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis Norwegian hevder "operative årsaker"?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  "Operative årsaker" er <strong>ikke</strong> en gyldig unnskyldning under EU261. Norwegian må betale uansett årsak til tidsendringen – med mindre det var ekstremvær eller flygelederstreik.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hvor lang tid har jeg på meg til å kreve?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  I Norge er foreldelsesfristen <strong>3 år</strong> fra datoen flyet skulle ha gått opprinnelig. Les mer: <Link href="/no/blog/krave-erstatning-fly-3-ar-siden" className="text-blue-600 hover:underline">Kan jeg kreve erstatning for et fly for 3 år siden?</Link>
                </p>
              </div>
            </div>
          </div>

          {/* CTA 2 */}
          <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white rounded-2xl p-8 md:p-12 text-center my-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Tidsendring uten varsel? Krev pengene dine</h3>
            <p className="text-xl mb-8 text-orange-100">
              ClaimWinger har høy suksessrate mot Norwegian på tidsendringskrav. No Win, No Fee.
            </p>
            <a href="https://claimwinger.com/no/kansellert-fly" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-orange-700 hover:bg-gray-100 text-lg px-8 py-6">
                Krev erstatning nå
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-orange-200 mt-4">
              ✓ 98% suksessrate | ✓ 4-8 ukers utbetaling | ✓ Ingen risiko
            </p>
          </div>

          <h2>Oppsummering</h2>
          <p>
            Tidsendringer på mer enn 2 timer mindre enn 14 dager før avgang regnes juridisk som kanselleringer under EU261 (gjelder i Norge gjennom EØS-avtalen). Du har rett til opptil 600 € erstatning – selv om du godtok den nye tiden og fløy. Norwegian prøver ofte å nekte gyldige krav ved å hevde "operative årsaker" – ClaimWinger har juridisk ekspertise til å bekjempe denne unnskyldningen.
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}
